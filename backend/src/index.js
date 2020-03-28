const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(3333);


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

