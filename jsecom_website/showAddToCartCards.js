
import { getCartProductFromLS } from "../getCartProducts";
import { removeProdFromCart } from "../removeProdFromCart";
import { updateCartProductTotal } from "../updatedCardProductTotal";
import products from "./api/products.json";
import { fetchQuantityFromCartsLS } from "./fetchQuantityFromCartsLS";
import { incrementDecrement } from "./incrementDecrement";

let cartProducts=getCartProductFromLS(); //Data came form local storage

let filterProducts= products.filter((curProd)=>{
    // console.log(curProd.id)
    return cartProducts.some((curElm)=> curElm.id===curProd.id)

})
console.log(filterProducts)

//________________________________________________

// to update the addToCart page html
//________________________________________________
const cartElement= document.querySelector("#productCartContainer")
const templateContainer= document.querySelector("#productCartTemplate");

const showCartProduct=()=>{
filterProducts.forEach((curProd)=>{
    const {category, id, image, name, stock, price}= curProd;

    let productClone= document.importNode(templateContainer.content, true);
    
    const lSActualData=fetchQuantityFromCartsLS(id, price)




    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent= category;
    productClone.querySelector(".productName").textContent=name;
    productClone.querySelector(".productImage").src= image;


    productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent=lSActualData.price;


productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
    incrementDecrement(event,id,stock,price);
})

    productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>
        removeProdFromCart(id));


    cartElement.appendChild(productClone)

})
}


//_________________________
//showing the cartProducts
//_________________________
showCartProduct()

//_________________________________
// Calculating overall prices of all products
//______________________________________
updateCartProductTotal();