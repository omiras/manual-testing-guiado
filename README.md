# El testing manual

Vamos a realizar dos ejercicios con un enfoque de testing manual.

## Ejecicio 1A: Descuento en tienda

Zara Online ha implementado una nueva política por lo que si gastas *1000€ o más* en una compra te calcula un 10% sobre el valor tota. Implementa la función _calculateDiscount_

## Ejercicio 1B: Un descuento menor

Amancio Ortega va que la cosa funciona: un descuento hace a la gente gastar mucho más de lo que se pensaba. Quieren añadir una nueva funcionalidad. Si el valor de compra es de 500 a 999 (ambos incluidos), entonces le aplicaremos un 5% de descuento

## Ejercicio 1C: Los cupones de descuento

En la útlima camapaña de verano, ZAra estuvo distribuyendo cheques con descuentos de 10€ y 20€ para futuras compras. Crea una nueva función que calcule **el precio final** que debe pagar el cliente después de aplicar todos los descuentos y cheques. Primero se debe aplicar el cheque descuento, y luego el % de descuento. ADEMÁS, hay que añadir 5€ de gastos de envío.

**Crea** en el fichero  _exercise-1-discount.js_ una función con las siguientes con las siguientes características:

```
- totalPrice: Siempre va a ser un number positivo
- voucher: Puede ser 0, 10 o 20. (es el cheque descuento)

function calculateTotal(totalPrice, voucher) {

}
```

### Ejemplos

1. Un chico que hace una compra de 750€ y no tiene cheque descuento. Se le debería aplicar un 5% de descuento sobre el precio final. deberíamos obtener 712.5 + 5€ de gastos de envío = 717.5 

2. Una chica que hace una compra de 1500€ y tiene un cheque de descuento de 10€. Debería pagar al final 1341 €  5€ de gastos de envío = 1346

