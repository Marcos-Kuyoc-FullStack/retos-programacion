/*
Dados cinco enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprima los respectivos valores mínimo y máximo como una sola línea de dos enteros largos separados por espacios.

Ejemplo
arr = [1,3,5,7,9]

La suma mínima es 1 + 3 + 5+ 7 = 16 y la suma máxima es 3 + 5 + 7 + 9 = 24. 

La función imprime
16 24

Explanation

The numbers are 1,2 ,3 ,4 ,5 and . Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.

*/

const main = () => {
  const data = [1, 2, 3, 4, 5];
  const sumTotal = [] ;
  
  data.forEach((item, index) => {
    const copyData = [...data];
    copyData.splice(index, 1);
    const result = copyData.reduce((acc, el) => acc + el, 0);
    sumTotal.push(result);
  });

  const min = Math.min(...sumTotal);
  const max = Math.max(...sumTotal);
  console.log(min, max)
}

main()