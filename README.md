# WeSender SDK para Javascript
  SDK para conexão com a API em javascript

**A chave da api deve ser passada na instância da classe, como construtor**

## Métodos diponiveis no momento
### - sendMessage
Esse metodo recebe um `payload` com as informações que devem ser enviadas e para quem deve ser enviado.
 ```js

payload: {
  destine: Array,
  message: String,
  hasSpecialCharacter: Boolean // opcional, by default is false
}

 ```
Resposta do método é a mesma que a da API:
```js

{
"Exito" : Boolean ,
"Mensagem" : String,
"Objeto" :
  {
    // quantity of message that you can send
    "SMS" : Number,
    "WhatsApp" : Number,
    "FacebookMesseger" : Number,
    "Integracoes" : Number,
  }
}

```

## Exemplo

- Usando arquivo

```html

 <script src="dist/wesender.sdk.js"></script>
 <script>
  const apikey = 'Valid api Key';
  const WSDK = new WeSenderSDK(apikey)
  const payload = {
    destine: [
    '920000000'
    ],
    message:'Olá Mundo do sdk',
  }
  WSDK.sendMessage(payload)
</script>

```

## License
MIT

## Autor
[Acidiney Dias](acidiney.dias@digitalfactory.co.ao)
