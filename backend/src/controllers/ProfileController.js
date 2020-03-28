const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
         .where('ong_id', ong_id) // buscando os incidentes que essa ong criou
         .select('*'); //selecionar tudo

         return response.json(incidents);
    }
}