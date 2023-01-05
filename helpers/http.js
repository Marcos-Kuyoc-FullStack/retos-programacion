const fetch = require('node-fetch');

class Http {
  async getData(url) {
    try {
      const response = await fetch(url);
      const result = response.json(response);

      return result;
    } catch (error) {
      console.error('No se pudo conectar a la API');
      throw error;
    }
  }
}

module.exports = {Http};
