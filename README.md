# WeSender SDK para Javascript
  SDK para conexão com a API em javascript

**A chave da api deve ser passada na instância da classe, como construtor**

`npm i wesenderjs`

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

- NPM

```ts
  import WeSenderSDK from 'wesenderjs'
  
  main () {
    const apikey = 'Valid api Key';
    const WSDK = new WeSenderSDK(apikey)
    const payload = {
      destine: [
        '920000000'
      ],
      message:'Olá Mundo do sdk',
    }
    
    WSDK.sendMessage(payload)
  
  }
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-modificação`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova modificação'`;
- Faça push para a sua branch: `git push origin minha-modificação`.

Depois que o merge da sua pull request for feito, você pode apagar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
## Autor
[Acidiney Dias](mailto:mailto:acidiney.dias@digitalfactory.co.ao)
