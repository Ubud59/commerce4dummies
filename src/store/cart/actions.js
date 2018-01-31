export function updateCart(dispatch) {
  return {
    updateCart: (cart) => dispatch({type:"UPDATE_CART", cart: cart})
  }
}
