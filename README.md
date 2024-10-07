# El testing manual

Vamos a realizar dos ejercicios con un enfoque de testing manual.

## Ejecicio 1A: Descuento en tienda

Zara Online ha implementado una nueva política por lo que si gastas *1000€ o más* en una compra te calcula un 10% sobre el valor total. Implementa la función _calculateDiscount_

## Ejercicio 1B: Un descuento menor

Amancio Ortega va que la cosa funciona: un descuento hace a la gente gastar mucho más de lo que se pensaba. Quieren **añadir** una nueva funcionalidad. Si el valor de compra es de 500 a 999 (ambos incluidos), entonces le aplicaremos un 5% de descuento

Para probarlo substituye los console.log por:

```
console.log(calculateDiscount(750)); // 37.95
```

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

## Ejercicio 2A: Escribir las pruebas primero

Mystery Box sigue implementando su software para canjear sus cupones de premio. Lee la docmentación sobre la función del _exercise-2-coupons.js_
y entiende cómo funciona. Fíjate que también hay una variable global de nombre **coupons** que funciona de base de datos de cupones.

Luego, NO CODIFIQUES todavía la función. Escribe todos los console.log (las pruebas) con las entradas que quieres probar tu función. Cómo programador y humano sabes que valor debe devolver la función dado un código de cuòn en concreto. Mira el primer ejemplo.

Escribe por lo menos **3 pruebas más** antes de pasar a implementar la función, una para cada caso que el cupón pueda ser inválido

### Ejercicio 2B: Implementar la función

Ahora pasa a implementar la función. Ten en cuenta dos cosas 

1. Los métodos de array te ayudarán mucho
2. Es un **array de objetos**. 