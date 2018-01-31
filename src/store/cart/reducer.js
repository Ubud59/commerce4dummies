const initialState = {
  productsInCart: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_CART":

      // const productsInCart = state.productsInCart;
      //
      // productsInCart.push({
      //   id:action.product.id,
      //   title:action.product.title,
      //   min_price:action.product.min_price,
      //   image_path:action.product.image_path,
      //   qty:action.qty
      // });
      //
      // const newCart = productsInCart.reduce( (accum, product) => {
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


      const productsInCart = state.productsInCart;

      let found = false;
      let index = -1;

      if (productsInCart.length>0) {
        index = productsInCart.findIndex(function(element) {
          return (element.id===action.product.id);
        });

        if (index>-1) {
          found=true;
        }
      }

      if (found) {
        productsInCart[index].qty+=action.qty;
      } else {
          productsInCart.push({
            id:action.product.id,
            title:action.product.title,
            min_price:action.product.min_price,
            image_path:action.product.image_path,
            qty:action.qty
          });
      }

      return {...state, productsInCart};

    default:
      return state;
  }
}
