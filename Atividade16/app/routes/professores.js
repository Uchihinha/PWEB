//var dbConnection = require('../config/dbConnection');
module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        // como está recebendo o app
        // já foi carregada no autoload e está sendo requisitada somente quando essa rota for //acessada
        var connection = app.config.dbConnection();
        var professoresModel = app.models.professorModel;

        professoresModel.getProfessores(connection, function (error, results) {
            res.render('informacao/professores', { profs: results });
        })
    });
}

