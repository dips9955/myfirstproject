const express = require('express');
const mysql = require('mysql');

const app = express();

const bodyParser = require('body-parser');

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function dbConnection()
{
    const connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'manager',
            database:'sunbeamDB'
    });
    connection.connect();
    return connection;
}

app.get('/emp',(request,response) => {

    const connection = dbConnection();
   
    const statement = 'select * from emp';
    connection.query(statement,(error,emp)=>{
        connection.end();
        response.send(emp);

    });
});


app.post('/emp',(request,response) => {
    const data = request.body;
    const connection = dbConnection();
   
    const statement =`insert into emp values ('${data.No}','${data.Name}','${data.City}')`;
    connection.query(statement,(error,emp1)=>{
        connection.end();
        response.send(emp1);

    });

});

app.put('/emp/:No',(request,response) => {
    const id = request.params.No;
    const data = request.body;

    const connection = dbConnection();
    const statement = `update emp set Name = '${data.Name}', City = '${data.City}' where No = ${id}`;
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(result);
    })

});

app.delete('/emp/:id',(request,response) => {
    const data = request.body;
    const id = request.params.id;
    const connection = dbConnection();
   
    const statement =`delete from emp where No= ${id}`;
    connection.query(statement,(error,emp3)=>{
        connection.end();
        response.send(emp3);

    });

});
app.listen(4000,'0.0.0.0',() => {
        console.log('strat 4000')
});