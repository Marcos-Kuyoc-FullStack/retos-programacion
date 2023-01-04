/*
FizzBuzz

Escribir un programa que imprima cada numero del 1 al 100 en una nueva linea
Por cada multiplo de 3, que imprima "Fizz" en lugar del numero
Por cada multiplo de 5, que imprima "Buz" en lugar del numero
Para numero que plutilos de 3 y 5 que imprima "FizzBuzz" en lugar del numero
*/

const fizzBuz = (n) => {
  for (let i=1; i <= n; i++) {
    let result = '';
    
    if (i % 3 === 0) {
      result += 'Fizz'
    }
    
    if (i % 5 === 0) {
      result += 'Buzz'
    }
    
    console.log(result || i);
  }
}

fizzBuz(15);