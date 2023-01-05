/*
Usando la API : https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g&limit=100

Los cokteils tiene que se extravagantes

Guardar los cocktails que tengan mas de 4 ingredientes y obtener el nombre.
*/
const { Http } = require('../helpers/http');

const getCokteils = async() => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g&limit=100'
  const http = new Http();
  const {drinks} = await http.getData(url);
 
  const extravagantCocktails = drinks.filter(checkIsExtravagantCocktails).map((item) => item.strDrink);
  console.log(extravagantCocktails);
}

const checkIsExtravagantCocktails = (drinks) => {
  const numberOfIngredients = Object.entries(drinks).filter(([key,value]) => key.startsWith('strIngredient') && value !== null).length;
  return numberOfIngredients > 4;
}

(async() => getCokteils())();