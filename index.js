const axios = require('axios')
/**
 * @description A javascript sdk to WeSender api
 * @requires fetch - A browser method, this can't run on node mode, use wesender.sdk module instead
 * @license MTI
 * @host https://www.wesender.co.ao
 * @version 0.1.beta
 * @author Acidiney Dias <acidineydias@gmail.com>
 */
class WeSenderSDK {
  /**
   * @param {String} apiKey 
   */
  constructor (apiKey) {
    this._url = 'https://api.wesender.co.ao/';
    this._apiKey = apiKey;
  }

  /**
   * @param { Object } payload
   * @param { Array } destine
   * @param { String } message
   * @param { Boolean } hasSpecialCharacters
   */
  async sendMessage ({ destine, message, hasSpecialCharacters = false }) {
    const route = 'envio/apikey';  
    const fullPath = this._url + route;

    const data = {
      ApiKey: this._apiKey,
      Destino: destine,
      Mensagem: message,
      CEspecial: hasSpecialCharacters
    }

    try {
      const sendResponse = await axios.post(fullPath, data)
      return sendResponse.data
    } catch (e) {
      return {
        Exito: false,
        Mensagem: 'Não foi possivel enviar messagem, verifique o seu apikey'
      };
    }
  }
}

module.exports = WeSenderSDK