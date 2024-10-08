const assert = require('assert')

/**
 * 
 * @param {number} price El valor total de la compra 
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento 
 */
function calculateDiscount(price) {

    let discount = 0;

    if (price > 500 && price < 1000) {
        discount = price * 0.05; // 5%
    }

    else if (price >= 1000) {
        discount = price * 0.1;
    }

    return discount;
}
console.log("Pruebo para 750€, debería aplicar un 5% de descuento y obtener: 37.5", calculateDiscount(750)); // 37.5
console.log("Pruebo para 5000€, debería aplicar un 10% de descuento y obtener el valor: 500", calculateDiscount(5000)); // 500, pues 500 es el 10% de 5000
console.log("Pruebo para 1000€, debería aplicar un 10% de descuento y obtener el valor: 100", calculateDiscount(1000)); // 100 , pues 100 es el 10% de 1000
console.log(calculateDiscount(100)); // 0, pues no llegamos al mínimo para obtener un descuento
console.log(calculateDiscount(0)); // 0
console.log(calculateDiscount(999.99)); // 49.999500000000005, edge case -> caso límite

const discount100 = calculateDiscount(100); // 0
assert.strictEqual(10, discount100, 'El descuento obtenido para 100 euros no es válido');

function calculateTotal(basePrice, voucher) {
    // 1. Restar al basePrice el valor del cupón
    let total = basePrice - voucher;

    // 2. Calcular si tenemos algún tipo de descuento (5% o un 10%...o nada). Tenéis que usar adecuadamente la función 'calculateDiscount'
    // 3. Restar ese descuenta al precio base

    total = total - calculateDiscount(total); // total -= calculateDiscount(total)

    // 4. Añadir los gastos de envío
    total += 5; // total = total + 5

    // 5. Devolver el precio final que debe pagar el cliente
    return total;
}

console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346
