module.exports = function () {
    this.salvarUsuario = function (professor, connection, callback) {
        connection.query('insert into professores SET ?', professor, callback);
    }

    return this;
}