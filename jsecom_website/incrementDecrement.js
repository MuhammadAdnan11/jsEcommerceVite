import { getCartProductFromLS } from "../getCartProducts";
import { updateCartProductTotal } from "../updatedCardProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  // Get data from LocalStorage
  let LocalCartProducts = getCartProductFromLS();

  let existingProd = LocalCartProducts.find((curProd) => curProd.id === id);

  let quantity = 1;
  let localStoragePrice = price;

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  }

  // Handle Increment
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else {
      quantity = stock;
    }
  }

  // Handle Decrement
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  // Update price based on quantity
  localStoragePrice = price * quantity;
  localStoragePrice=Number (localStoragePrice.toFixed(2))

  // Update localStorage products
  const updatedCart = LocalCartProducts.map((curProd) => {
    if (curProd.id === id) {
      return { id, quantity, price: localStoragePrice };
    } else {
      return curProd;
    }
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  // Update UI (optional, based on your HTML structure)
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;


//_________________________________
// Calculating overall prices of all products
//______________________________________
updateCartProductTotal();

};
