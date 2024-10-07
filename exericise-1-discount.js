
function calculateDiscount(totalPrice) {

    let discount = 0;

    if (totalPrice >= 500 && totalPrice < 1000) {
        discount = totalPrice * .05;
    }

    else if (totalPrice >= 1000) {
        discount = totalPrice * 0.1;
    }

    return discount;
}
console.log(calculateDiscount(1000)); // 100
console.log(calculateDiscount(750)); // 37.5
console.log(calculateDiscount(450)); // 0

function calculateTotal(basePrice, voucher) {
    let total = 0;

    total = basePrice - voucher;
    total = total - calculateDiscount(total);
    total = total + 5;

    return total;
}

console.log("Compra de 750€ sin cheque descuento.  Se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346