# API RESTful com Node.js, Express e MongoDB (CRUD)

Projeto pronto com base no material "Crie uma API RESTful com Node - Conexão com Banco (Parte I e II)".

## Estrutura do projeto

```
api-node-mongo/
├── index.js                     # arquivo principal (Express + conexão Mongoose)
├── package.json
├── models/
│   └── Person.js                # schema/model da entidade Person
├── controllers/
│   └── PersonController.js      # regras de negócio do CRUD
└── routes/
    └── PersonRoutes.js          # rotas HTTP (/person)
```

## Passo a passo para rodar e entregar

1. **Extrair o projeto** em uma pasta, ex: `Desktop/api-node-mongo`.

2. **Instalar as dependências**
   Abra o terminal na pasta do projeto e rode:
   ```
   npm install
   ```

3. **Instalar e abrir o MongoDB**
   - Baixe o MongoDB Community Server: https://www.mongodb.com/try/download/community
   - Instale (aceite instalar o MongoDB Compass também).
   - O MongoDB roda por padrão na porta `27017`.
   - Abra o Compass e conecte usando a URI `mongodb://localhost:27017/` para confirmar que o banco está no ar.

4. **Rodar a API**
   ```
   npm start
   ```
   Se aparecer `Conectou ao banco!` e `Servidor rodando em http://localhost:3000`, está tudo certo.

5. **Testar no Postman**
   Baixe o Postman: https://www.postman.com/downloads/
   Crie uma coleção "API Node + Mongoose" e teste cada rota abaixo.

## Rotas disponíveis (CRUD completo)

| Ação   | Verbo  | Rota          | Corpo (JSON)                                              |
|--------|--------|---------------|------------------------------------------------------------|
| Criar  | POST   | `/person`     | `{ "name": "Thiago", "salary": 8000, "approved": false }`  |
| Listar todos | GET | `/person`  | —                                                            |
| Buscar um | GET | `/person/:id` | —                                                          |
| Atualizar | PUT | `/person/:id` | `{ "name": "Thiago", "salary": 9000, "approved": true }`   |
| Remover | DELETE | `/person/:id` | —                                                          |

### Exemplo de teste no Postman
1. **POST** `http://localhost:3000/person` (Body → raw → JSON):
   ```json
   {
     "name": "Thiago",
     "salary": 8000,
     "approved": false
   }
   ```
   Resposta esperada: status `201 Created` e mensagem de sucesso.

2. **GET** `http://localhost:3000/person` → lista todas as pessoas cadastradas.

3. **GET** `http://localhost:3000/person/<id copiado da resposta anterior>` → retorna só aquela pessoa.

4. **PUT** `http://localhost:3000/person/<id>` (Body → raw → JSON) → atualiza os dados.

5. **DELETE** `http://localhost:3000/person/<id>` → remove a pessoa.

Confira no MongoDB Compass (coleção `people`, dentro do banco `ARQUIVO`) se os dados realmente aparecem, são atualizados e são removidos.

## Checklist antes de entregar

- [ ] `npm install` executado sem erros
- [ ] MongoDB instalado e rodando (Compass conecta em `localhost:27017`)
- [ ] `npm start` mostra "Conectou ao banco!"
- [ ] POST cria uma pessoa (status 201)
- [ ] GET lista todas as pessoas
- [ ] GET por id retorna a pessoa certa (e 404 se o id não existir)
- [ ] PUT atualiza os dados (e 404 se o id não existir)
- [ ] DELETE remove a pessoa (e 404 se o id não existir)
- [ ] Validações funcionando: POST/PUT sem `name` ou `salary` retornam status 422
- [ ] Prints do Postman (cada verbo) e do Compass mostrando os dados, para anexar no relatório da atividade

## Observações

- As validações (`name` e `salary` obrigatórios) simulam o "mundo real", como pedido no enunciado.
- Os status HTTP usados seguem o padrão REST: `201` criado, `200` sucesso, `404` não encontrado, `422` dado inválido, `500` erro interno.
- Se o `npm start` der erro de módulo não encontrado, rode `npm install --save mongoose express` e `npm install --save-dev nodemon`.
