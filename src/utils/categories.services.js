function fetchCategories(){
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/`,
    {method: "GET"}
  )
  .then((response) => response.json())
  .catch((error) => {
        console.warn(error);
  });
}

function fetchProducts(id){
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${id}/products`,
    {method: "GET"}
  )
  .then((response) => response.json())
  .then((products) => products.map((product) => {
    product.image_path = "https://www.decathlon.fr/media/" + product.image_path;
    product.rating_percent = Math.round(((product.rating / 5) * 100) / 10 ) * 10;
    return product;
  }))
  .catch((error) => {
        console.warn(error);
  });
}

export {fetchCategories, fetchProducts};
