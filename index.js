const express = require('express');
//const app = express();
//const bodyParser = require('body-parser');
//const port = 3000; //porta padrão
//const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

// function execSQLQuery(sqlQry, res) {
//     const connection = mysql.createConnection({
//         host: 'localhost.mysql.awsaurora-memory',
//         port: 3306,
//         user: 'root',
//         password: 'Foxit258',
//         database: 'nodemysql'
//     });

//     connection.query(sqlQry, function (error, results, fields) {
//         if (error)
//             res.json(error);
//         else
//             res.json(results);
//         connection.end();
//         console.log('executou!');
//     });
// }

// router.get('/clientes', (req, res) => {
//     execSQLQuery('SELECT * FROM Clientes', res);
// })

// router.get('/clientes/:id?', (req, res) => {
//     "use strict";
//     let filter = '';
//     if (req.params.id) filter = ` WHERE ID=${parseInt(req.params.id)}`;
//     execSQLQuery('SELECT * FROM Clientes' + filter, res);
// })

// router.delete('/clientes/excluir/:id', (req, res) => {
//     execSQLQuery(`DELETE FROM Clientes WHERE ID=${parseInt(req.params.id)}`, res);
//     console.log('Registro excluido!');
// })

// //curl - X DELETE http://localhost:3000/clientes/excluir/1

// router.post('/clientes/inserir', (req, res) => {
//     const nome = req.body.nome.substring(0, 150);
//     const cpf = req.body.cpf.substring(0, 11);
//     execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
// });

// //curl - X POST - d "nome=luiz&cpf=12345678901" http://localhost:3000/clientes/inserir

// router.patch('/clientes/atualizar/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0, 150);
//     const cpf = req.body.cpf.substring(0, 11);
//     execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
// })

// //cURL - X PATCH - d "nome=fernando&cpf=12345678901" http://localhost:3000/clientes/atualizar/4
