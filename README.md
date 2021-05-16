# Back-End-Crypto

Bem vindo ao Projeto Back-End-Crypto - Desafio - Full-Stack-Trybe

---

## INTRODUÇÃO

O projeto é uma api para cotação de BitCoin, usando uma API externa **CoinDesk**, [documentação está disponível aqui](https://www.coindesk.com/coindesk-api), para pegar a cotação do BTC em dolar, para depois sim a api criada retornar os valores em EUR, CAD, BRL de acordo com a cotação do dólar que deve ser atualizada manualmente em uma das rotas.  

Criado o frontEnd da aplicação em outro no repositório: .

---

### Executando o projeto

Para executar o projeto, basta seguir os seguintes passos:


1. Navegue para o local onde o projeto será clonado e execute o comando ``;


2. Execute o comando `cd `;


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

[fetch-mock](https://www.npmjs.com/package/fetch-mock), [node-fetch](https://www.npmjs.com/package/node-fetch), [fetch-mock-jest]
(https://www.npmjs.com/package/jest-fetch-mock) - para realizar request fetch e mock para os testes.

[eslint](https://eslint.org/) - [Padrão do Standard JavaScript](https://standardjs.com/)


## Funcionamento

Rotas:
  post: /api/login - Realiza o login da aplicação.
  
    -body: 
          - email - padrão <name>@<email>.<com>
          - password - Necessário 6 digitos exatos e todos números.

    - return: 
            sucesso - statusCode: 200, {message: token(token de 16 caracteres) }
            falha - statusCode do erro, {message: referente ao erro}




### Por Henrique Eyer. [LINKEDIN](https://www.linkedin.com/in/henriqueeyer)
