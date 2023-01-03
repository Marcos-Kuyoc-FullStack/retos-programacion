
/*
Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , negativos y cero . Imprime el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.

Nota: Este desafío presenta problemas de precisión. Los casos de prueba están escalados a seis decimales, aunque las respuestas con un error absoluto de hasta 10 ^ 4 son aceptables.

Imprimir
Imprime las proporciones de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada condígitos después del decimal. La función no debe devolver un valor.

Formato de entrada

La primera línea contiene un número entero, n , el tamaño de la matriz.
La segunda línea contiene n enteros separados por espacios que describen.

Restricciones
0 < n <= 100 
-100 <= arr[i] <= 100


Formato de salida

Imprime lo siguiente 3 líneas, cada un 6 adecimales:

proporción de valores positivos
proporción de valores negativos
proporción de ceros

ENTRADA
size n = 6
arr = [-4, 3, -9, 0, 4, 1]

SALIDA
0.500000
0.333333
0.166667
*/

const MAX_ITEM = 100;

function main() {
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);
}

const plusMinus = (arr) => {
  const n = arr.length;
  const isValidateArray = validateData(arr);
  
  if (isValidateArray) {
    const positive = totalPositive(arr);
    const negative = totalNegative(arr);
    const zeros = totalZeros(arr);

    console.log(calculateProportions(n, positive));
    console.log(calculateProportions(n, negative));
    console.log(calculateProportions(n, zeros));
  }
}

const calculateProportions = (n, total) => {
  const result = total / n;
  return result.toFixed(6);
}

const validateData = (data) => {
  try{
    const n = data.length;
    if (n < 0 || n <= MAX_ITEM) {
      const validateItems = data.some(i => i <= -MAX_ITEM || i<= MAX_ITEM);

      return validateItems;
    }
    return false;
  } catch(e) {
    console.error(e);
    throw (`Fuera de rango`);  
  }
}

const totalPositive = (data) => {
  let result = data.filter((i) => i > 0);
  
  return result.length;
}

const totalNegative = (data) => {
  let result = data.filter((i) => {
    return i < 0;
  });
  
  return result.length;
}

const totalZeros = (data) => {
  let result = data.filter((i) => {
    return i === 0;
  });
  
  return result.length;
}


main();