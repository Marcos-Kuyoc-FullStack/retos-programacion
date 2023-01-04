const {fizzBuz} = require('./reto-4');

describe('fizzbuzz', () => {
  test('Se espera que regrese Fizz si se es multiplo de 3', () => {
    const expected = 'fizz';
    const result = fizzBuz(6);
    expect(expected).toBe(result);
  })

  test('Se espera que regrese Buzz si se es multiplo de 5', () => {
    const expected = 'buzz';
    const result = fizzBuz(10);
    expect(expected).toBe(result);
  })

  test('Se espera que regrese FizzBuzz si se es multiplo de 3 y 5', () => {
    const expected = 'fizzBuzz';
    const result = fizzBuz(15);
    expect(expected).toBe(result);
  })
})