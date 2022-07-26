const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuidv4 = require('uuid').v4;//id generator 


app.use(bodyParser.urlencoded({ extended: false }));

//myAPP
var users = [] 

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.get('/users',(req,res) => {
    res.send(users);
})

app.get('/users/create',(req,res)=> {
    res.sendFile(__dirname + '/createUser.html')
})

app.post('/users',(req,res)=> {
    let id = uuidv4();
    let user = req.body;
    users.push({ ... user, id: id});
    res.redirect('/')
})




//func para ouvir na porta 3000
app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
