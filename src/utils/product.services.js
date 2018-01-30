
function fetchProduct(productId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${productId}`,
    {
      method: "GET"
    })
    .then((result) => {
      const product= result.json();
      return product;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

export default fetchProduct;
