const express = require('express');
const path = require('path');
const app = express();
const Stripe = require("stripe");

if (process.env.NODE_ENV !== "production") {
  /**
   * This allows us to use the .env.local pattern offered by React.
   * Meaning we don't need to source our .env.local file and it does not
   * need to contain `export`, it can look like that:
   *
   * REACT_APP_PUBLISHABLE_KEY="mykey"
   * REACT_APP_SECRET_KEY="myscecretkey"
   */
  const path = require("path");
  require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });
}

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;
const stripe = Stripe(keySecret);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/finalize', function (request, result) {
  const amount = calculateOrderAmount(request.body.products.cart);

  stripe.customers
    .create({
      email: request.body.authorize.email,
      source: request.body.authorize.id
    })
    .then(customer =>
      stripe.charges.create({
        amount: amount,
        description: "Sample Charge",
        currency: "eur",
        customer: customer.id
      })
    )
    .then(charge => result.json({message: charge.status}));
})


const calculateOrderAmount = (products) => {
  const amount = products.reduce(
      ((acc,item)=> {
        acc+=(item.min_price * 100 * item.qty);
        return acc;
      }),0).toFixed(0);

  return amount;

}

app.listen(process.env.PORT || 8080);
