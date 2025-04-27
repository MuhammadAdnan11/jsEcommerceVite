import { getCartProductFromLS } from "./getCartProducts"

export const updateCartProductTotal=()=>{
    let productSubTotal= document.querySelector(".productSubTotal");
    let productFinalTotal= document.querySelector(".productFinalTotal");





    let LocalCartProducts= getCartProductFromLS();
    let initalValue=0;
    let totalProductPrice= LocalCartProducts.reduce((accum, curElm)=>{
        let productPrice= parseInt(curElm.price) || 0;
        return accum + productPrice;
    }, initalValue);
    // console.log(totalProductPrice);

    productSubTotal.textContent=`RS ${totalProductPrice}`;
    productFinalTotal.textContent=`RS ${totalProductPrice + 50}`;

}