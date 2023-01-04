/*
FizzBuzz

Escribir un programa que imprima cada numero del 1 al 100 en una nueva linea
Por cada multiplo de 3, que imprima "Fizz" en lugar del numero
Por cada multiplo de 5, que imprima "Buz" en lugar del numero
Para numero que plutilos de 3 y 5 que imprima "FizzBuzz" en lugar del numero
*/

const main = (n) => {
  for (let i=1; i <= n; i++) {
    console.log(`${i}: ${fizzBuz(i)}`);
  }
}

const fizzBuz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }

  if (n % 3 === 0) {
    return 'fizz';
  }
  
  if (n % 5 === 0) {
    return 'buzz';
  }

  return n;
}

main(15);

module.exports = {
  fizzBuz
}