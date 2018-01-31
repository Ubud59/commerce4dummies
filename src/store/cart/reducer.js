
const initialState = localStorage.getItem("cart")
  ? {cart: JSON.parse(localStorage.getItem("cart")) }
  : {cart: []};

console.log("initialState in cart reducer",initialState);

export default function cartReducer(state = initialState, action) {
  let cart=[];
  switch (action.type) {

    case "ADD_TO_CART":

      // const cart = state.cart;
      //
      // cart.push({
      //   id:action.product.id,
      //   title:action.product.title,
      //   min_price:action.product.min_price,
      //   image_path:action.product.image_path,
      //   qty:action.qty
      // });
      //
      // const newCart = cart.reduce( (accum, product) => {
      //   const index=accum.findIndex( (item) => (item.id===product.id) );
      //
      //   if (index > -1) {  //product found in cart
      //     accum[index].qty+=product.qty;
      //   } else {
      //     accum.push(product);
      //   }
      //
      //   return accum;
      // });
      //
      // return {...state, newCart};


      cart = state.cart;

      let found = false;
      let index = -1;

      if (cart.length>0) {
        index = cart.findIndex(function(element) {
          return (element.id===action.product.id);
        });

        if ( index > -1) {
          found=true;
        }
      }

      if (found) {
        cart[index].qty+=action.qty;
      } else {
          cart.push({
            id:action.product.id,
            title:action.product.title,
            min_price:action.product.min_price,
            image_path:action.product.image_path,
            qty:action.qty
          });
      }

      localStorage.setItem("cart", JSON.stringify(cart));


      return {...state, cart};

      case "UPDATE_QTY" :

        cart = state.cart;
        console.log("state.cart: ", state);
        console.log("action: ", action);
        console.log("cart: ", cart);
        cart[index].qty = action.qty;
        return {...state, cart};


      case "FETCH_CART":

      return {...state, cart};

      case "VALIDATE_CART":

      return {...state, cart};

    default:
      return state;
  }
}
