const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/**
 *  rota / recurso
 * metodos http
 * get = buscar/listar umas informação do banckend
 * post : criar uma informaçao no backend cadastrando
 * put: alterar uma informaçao no backend alterando
 */
/**
 * Tipos de paramentros
 * 
 * Query: paramentros nomeados e enviados na rota pos "?"(filtros, paginçao )
 * route params: parametrs para identificar recursos
 * request body: corpo da requisiçao utilizzado para criar ou alterar recursos
 */

 /**
  * SQL: PostgreSQL
  * noSQL: MongoDB
  */
 /**
  * query builder:exemplo table('users').select('*').where() 
  */

