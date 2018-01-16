const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({
    message: 'Funcionando!'
}));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'us-cdbr-iron-east-05.cleardb.net',
        port: 3306,
        user: 'b73c66257781cc',
        password: 'f57ec2ff',
        database: '`heroku_0674db4adc0cead`'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

router.get('/clientes', (req, res) => {
    execSQLQuery('SELECT * FROM clientes', res);
})

router.get('/clientes/:id?', (req, res) => {
    "use strict";
    let filter = '';
    if (req.params.id) filter = ` WHERE id=${parseInt(req.params.id)}`;
    execSQLQuery('SELECT * FROM clientes' + filter, res);
});

router.delete('/clientes/excluir/:id', (req, res) => {
    execSQLQuery(`DELETE FROM clientes WHERE id=${parseInt(req.params.id)}`, res);
    console.log('Registro excluido!');
});

//curl - X DELETE http://localhost:3000/clientes/excluir/1

router.post('/clientes/inserir', (req, res) => {
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(`INSERT INTO clientes (nome, cpf) VALUES('${nome}','${cpf}')`, res);
});

//curl - X POST - d "nome=luiz&cpf=12345678901" http://localhost:3000/clientes/inserir

router.patch('/clientes/atualizar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(`UPDATE clientes SET nome='${nome}', cpf='${cpf}' WHERE id=${id}`, res);
});

//cURL - X PATCH - d "nome=fernando&cpf=12345678901" http://localhost:3000/clientes/atualizar/4