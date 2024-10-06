/**
 * En nuestra tienda online siempre aplicamos un descuento en función del total del valor de la compra. De momento el único descuento que tenemos aplicado es que si el valor de la compra es mayor a 100, aplicamos un descuento del 5%
 */

function calculateDiscount(totalPrice) {

    let discount = 0;

    if (totalPrice > 100) {
        discount = totalPrice * 0.05;
    }

    else if (totalPrice > 200) {
        discount = totalPrice * 0.10;
    }


    return discount;
}
console.log(calculateDiscount(1000)); // 100 euros de descuento
console.log(calculateDiscount(150)); // 7.5 euros de descuento


