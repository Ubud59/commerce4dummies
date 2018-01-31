
function fetchProduct(productId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${productId}`,
    {
      method: "GET"
    })
    .then(result => result.json())
    .then(product => {
      product.image_path = "https://www.decathlon.fr/media/" + product.image_path;
      product.rating_percent = Math.round(((product.rating / 5) * 100) / 10 ) * 10;
      return product;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

export default fetchProduct;
