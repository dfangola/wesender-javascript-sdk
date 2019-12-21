require('dotenv').config()

const WeSenderSDK = require('../index')

const WSDK = new WeSenderSDK(process.env.WSSD_APIKEY)

describe('WeSenderSDK', function () {
  it('user can send message from apikey', async function () {
    const payload = {
      destine: [
        "000000000"
      ],
      message: 'Olá mundo, yh',
      hasSpecialCharacter: true
    }
    
    const response = await WSDK.sendMessage(payload)
    expect(response).toHaveProperty('Exito', true)
  })
})
