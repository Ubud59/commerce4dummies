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
  .catch((error) => {
        console.warn(error);
  });
}

export {fetchCategories, fetchProducts};
