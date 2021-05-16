# Back-End-Crypto

Bem vindo ao Projeto Back-End-Crypto - Desafio - Full-Stack-Trybe

---

## INTRODUÇÃO

O projeto é uma api para cotação de BitCoin, usando uma API externa **CoinDesk**, [documentação está disponível aqui](https://www.coindesk.com/coindesk-api), para pegar a cotação do BTC em dolar, para depois sim a api criada retornar os valores em EUR, CAD, BRL de acordo com a cotação do dólar que deve ser atualizada manualmente em uma das rotas.  

Criado o frontEnd da aplicação em outro no repositório: .

---

### Executando o projeto

Para executar o projeto, basta seguir os seguintes passos:


1. Navegue para o local onde o projeto será clonado e execute o comando `git@github.com:HenriqueEyer/back-end-crypto.git`;


2. Execute o comando `cd back-end-crypto`;


3. Instale as dependências utilizando o comando `npm install`;


4. Inicialize o projeto com `npm start`;

---

### Testes

Os testes desenvolvidos utilizam o jest.

Os testes abrangem todas as regras de negócio do projeto, não se restringindo a julgar a qualidade apenas pela cobertura de linhas.

Para rodar os testes, utilize `npm test`.

Para ver a cobertura de testes, utilize o comando `npm run test-coverage`.

### Tecnologia Usadas:

Typescript

[Express](https://expressjs.com/pt-br/),

[Validator](https://www.npmjs.com/package/validator) - validações de campos

[Jest](https://jestjs.io/docs/getting-started) - testes da aplicação

[supertest](https://www.npmjs.com/package/supertest) - Para auxiliar nos testes da api

[fetch-mock](https://www.npmjs.com/package/fetch-mock), [node-fetch](https://www.npmjs.com/package/node-fetch),[fetch-mock-jest](https://www.npmjs.com/package/jest-fetch-mock) - para realizar request fetch e mock para os testes.

[eslint](https://eslint.org/) - [Padrão do Standard JavaScript](https://standardjs.com/)

[git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) - Auxiliar commit formatados.


## Funcionamento

Rotas:

### post: /api/login - Realiza o login da aplicação.
-body: 
- email - padrão name@email.com
- password - Necessário 6 digitos exatos e todos números.

- return: 
sucesso - statusCode: 200, 
```json
{
  "message": "token(token de 16 caracteres)" 
}
```
falha - statusCode do erro,
```json
{
  "message": "referente ao erro" 
}
```
### get: /api/crypto/btc - Realiza a request para pegar os dados, necessário possuir o token de 16 digitos gerado no login.
return: 
sucesso - statusCode: 200, 
```json
{
    "time": {
    "updated": "Mar 22, 2020 23:54:00 UTC",
    "updatedISO": "2020-03-22T23:54:00+00:00",
    "updateduk": "Mar 22, 2020 at 23:54 GMT"
    },
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from    openexchangerates.org",
    "bpi": {
       "USD": {
         "code": "USD",
         "rate": "6,506.6717",
         "description": "United States Dollar",
         "rate_float": 6506.6717
       },
       "BTC": {
          "code": "BTC",
          "rate": "1,0000.00",
          "description": "Bitcoin",
          "rate_float": 1
       },
       "BRL": {
         "code": "BRL",
         "rate": "1.0000",
         "description": "Bitcoin",
         "rate_float": 10000
       },
       "EUR": {
          "code": "EUR",
          "rate": "1.0000",
          "description": "Bitcoin",
          "rate_float": 10000
       },
       "CAD": {
          "code": "CAD",
          "rate": "2.0000",
          "description": "Bitcoin",
          "rate_float": 20000
        }
    }
}
```
- falha - statusCode do erro,
```json
{
  "message": "referente ao erro"
}
```

### post: /api/crypto/btc - Realiza o update do valor do dólar
-body: 
- currency - Precisa ser alguma dessas ["CAD","BRL","EUR"].
- value - Qualquer numero inteiro maior que o zero.

- return: 
sucesso - statusCode: 200,

```json
{
  "message": "Valor alterado com sucesso!" 
}
```
- falha - statusCode do erro, 
```json
{            
  "message": "referente ao erro"
}
```



### Por Henrique Eyer. [LINKEDIN](https://www.linkedin.com/in/henriqueeyer)
