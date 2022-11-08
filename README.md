# Trybesmith!

## Descrição

Foi criada uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Foi desenvolvida todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas stuck_out_tongue_winking_eye - Create, Read, Update e Delete).

Foram criados alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.

As habilidade utilizadas nesse projeto foram:

  - Entender o funcionamento da camada de Model;

  - Delegar responsabilidades específicas para essa camada;

  - Estruturar uma aplicação em camadas utilizando TypeScrip;

  - Delegar responsabilidades específicas para cada parte do seu app;

  - Melhorar manutenibilidade e reusabilidade do seu código;

  - Entender e aplicar os padrões REST;

  - Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

#### Status do projeto: em desenvolvimento ⚠️

---

#### Linguagens utilizadas

  * TypeScript
  * Express
  * MySQL

---

## Como rodar o projeto localmente

1. Clone o repositório
  * `git@github.com:Murilo-Carrijo/Projeto-BackEnd-Store-Manager-NodeJs.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-BackEnd-Store-Manager-NodeJs`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Configure as variáveis de ambiente:
  ```
    host: process.env.MYSQL_HOST
    user: process.env.MYSQL_USER
    password: process.env.MYSQL_PASSWORD
  ```

4. Teste os CRUDs utilizando ferramentas como o POSTMAN. 

---

## Desenvolvimento

O projeto foi realizado durante o curso da Trybe e os seguintes requisitos precisariam ser cumpridos: 

- [X] 1 - _Crie um endpoint para a listagem de produtos_

- [X] 2 - _Crie um endpoint para o cadastro de produtos_

- [X] 3 - _Crie um endpoint para o cadastro de pessoas usuárias_

- [X] 4 - _Crie um endpoint para listar todos os pedidos_
  
  ### Requisitos Bônus:

- [ ] 5 - _Crie um endpoint para o login de pessoas usuárias_

- [ ] 6 - _Crie um endpoint para o cadastro de um pedido_