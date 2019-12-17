/**
 * @description A javascript sdk to WeSender api
 * @requires fetch - A browser method, this can't run on node mode, use wesender.sdk module instead
 * @license MTI
 * @host https://www.wesender.co.ao
 * @version 0.1.beta
 * @author Acidiney Dias <acidineydias@gmail.com>
 */

var headers = new Headers();
headers.append("Content-Type", "application/json");

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

    const body = {
      ApiKey: this._apiKey,
      Destino: destine,
      Mensagem: message,
      CEspecial: hasSpecialCharacters
    }

    try {
      const sendStreambleResponse = await fetch(fullPath, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
      })

      const sendResponse = await sendStreambleResponse.json()
      return sendResponse
    } catch (e) {
      throw e;
    }
  }
}
