export default function fetchCategories(){
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/`,
    {method: "GET"}
  )
  .then((response) => response.json())
  .catch((error) => {
        console.warn(error);
  });
}
