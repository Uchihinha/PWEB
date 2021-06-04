module.exports = function (app) {
    app.get('/informacao/professores/detalhaprofessor', function (req, res) {
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM professores WHERE id_professor = 1", function (error, results) {
            res.tender('informacao/professores/detalhaprofessor', { profs: results });
        });
    });
}