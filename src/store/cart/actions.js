export function updateCart(dispatch) {
  return {
    updateQty: (index,qty) => dispatch({type:"UPDATE_QTY", index: index, qty: qty}),
    deleteProduct: (index) => dispatch({type:"DELETE_PRODUCT", index}),
    handleNameChange: (event) => dispatch({type:"CHECKOUT_FORM_NAME", name: event.target.value}),
    handleAddressChange: (event) => dispatch({type:"CHECKOUT_FORM_ADDRESS", address: event.target.value}),
    handlePhoneChange: (event) => dispatch({type:"CHECKOUT_FORM_PHONE", phone: event.target.value}),
    toggleDialogProcessing: () => dispatch({type:"OPEN_PAYMENT_DIALOG"}),
    resetCart: () => dispatch({type:"CLEAR_CART"})
  }
}
