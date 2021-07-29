# Projeto NLW#05

Chat desenvolvido em node.js, projeto do evento NLW#05, com algumas alterações de tecnologias do projeto original para estudo pessoal.


## Tecnologias 

Tecnologias utilizadas nesse projeto:
* [Node.js 14.17+](https://nodejs.org/en/download/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/)
* [Socket.io](https://socket.io/)  
* [PostgreSQL](https://www.postgresql.org/download/)


## Instalação 

Clone o repositório do projeto 
```bash 
  git clone https://github.com/leo-jansen/api_nlw05.git
  cd api_nlw05
```
Altera as variáveis do banco de dados no arquivo ```ormconfig.json```, depois instalar as dependências do projeto
npm
```bash 
  npm install
```
yarn:
```bash 
  yarn install
```
Executar os comandos abaixo para rodar as migrations
npm:
```bash 
  npm typeorm migration:run
```
yarn:
```bash 
  yarn typeorm migration:run
```
Utilize o comando dev para rodar a aplicação
npm:
```bash 
  npm dev
```
yarn:
```bash 
  yarn dev
```
Por fim acesse a aplicação no endereço `https://localhost:3000/pages/admin` para o ``admin`` e o endereço `https://localhost:3000/pages/client` para ``cliente``


## License

[MIT](https://choosealicense.com/licenses/mit/)
