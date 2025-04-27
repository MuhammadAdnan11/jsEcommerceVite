import "./src/style.css";
import products from "./api/products.json";
console.log(products);
import { showProductContainer } from "./homeProductCards";
//call the function to display all products as a card

showProductContainer(products);
