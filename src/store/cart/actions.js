export function updateCart(dispatch) {
  return {
    updateQty: (index,qty) => dispatch({type:"UPDATE_QTY", index: index, qty: qty})
  }
}
