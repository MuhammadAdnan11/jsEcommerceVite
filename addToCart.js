import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

//----------------------------------------------------------
// to get the cart data from the locatStorage
// to update the cart value and also to get the data always ready from local Storage
//------------------------------------------------------------------------



getCartProductFromLS();

export const addToCart=(event,id,stock)=>{

    let arrLocalStorageProduct= getCartProductFromLS();

    const  currentProdElem= document.querySelector(`#card${id}`);
    let quantity= currentProdElem.querySelector(".productQuantity").innerText;
    let price= currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);
price= price.replace("Rs", "");


//? Checking if user clicked on same card twice so, only price and quantity will be updated
let existingProd=arrLocalStorageProduct.find((curProd)=>curProd.id===id)


if(existingProd && quantity> 1){
    quantity=Number(existingProd.quantity) + Number( quantity); 
    price= Number(price*quantity);
// localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))

let updatedCart= {id,quantity,price};

 updatedCart=   arrLocalStorageProduct.map((curProd)=>{
    // if(curProd.id===id){
    //     updatedCart;
    // }else{
    //     curProd;
    // }

    return curProd.id=== id ? updatedCart: curProd;
})
//////////////////////////////////?
localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

//Show toast when product added to the cart
    showToast("add", id);


}

if(existingProd){
    // alert("Dupliate! Already Existing.")
    return false;
}

price= Number(price*quantity);
quantity=Number(quantity);

// let updateCart= {id, quantity,price}
arrLocalStorageProduct.push({id,quantity,price});
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))

 ///update the cart button value
 updateCartValue(arrLocalStorageProduct);
//Show toast when product added to the cart
showToast("add", id);
};