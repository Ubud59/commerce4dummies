
const initialState = localStorage.getItem("cart")
  ? {
      cart: JSON.parse(localStorage.getItem("cart")),
      checkoutForm: {
        name: '',
        address: '',
        phone: '',
        email: ''
      },
      shippinInfos: {
        id: null,
        fullname: null,
        givenName: null,
        familyName: null,
        avatar: null,
        email: null
      },
      payment: {
        loaderOpen: false
      }
    }
  : {
      cart: [],
      checkoutForm: {
        name: '',
        address: '',
        phone: ''
      },
      shippinInfos: {
        id: null,
        fullname: null,
        givenName: null,
        familyName: null,
        avatar: null,
        email: null
      },
      payment: {
        loaderOpen: false
      }
    };

console.log("initialState in cart reducer",initialState);

export default function cartReducer(state = initialState, action) {
  let cart=[];
  switch (action.type) {

    case "ADD_TO_CART":
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
      cart[action.index].qty = action.qty;
      localStorage.setItem("cart", JSON.stringify(cart));
      return {...state, cart};

    case "DELETE_PRODUCT" :
      cart = state.cart;
      cart.splice(action.index,1);
      return {...state, cart};

    case "FETCH_CART":
      return {...state, cart};

    case "VALIDATE_CART":
      return {...state, cart};

    case "CHECKOUT_FORM_NAME":
      return {...state, checkoutForm: {...state.checkoutForm, name: action.name}};
    case "CHECKOUT_FORM_ADDRESS":
      return {...state, checkoutForm: {...state.checkoutForm, address: action.address}}
    case "CHECKOUT_FORM_PHONE":
      return {...state, checkoutForm: {...state.checkoutForm, phone: action.phone}}
    case "LOGGED_IN":
      return {
          ...state,
          checkoutForm: {
            ...state.checkoutForm,
            name: action.fullname,
            email: action.email
          },
          shippinInfos: {
            id: action.id,
            fullname: action.fullname,
            givenName: action.givenName,
            familyName: action.familyName,
            avatar: action.avatar,
            email: action.email
          }};
    case "SIGN_OUT":
      return {...state, shippinInfos: {
        id: null,
        fullname: null,
        givenName: null,
        familyName: null,
        avatar: null,
        email: null
      }};
    case "OPEN_PAYMENT_DIALOG":
      return {...state, payment: {loaderOpen: !state.payment.loaderOpen}}
    case "CLEAR_CART":
      localStorage.removeItem("cart")
      return {...state, cart: []}
    default:
      return state;
  }
}
