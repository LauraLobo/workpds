const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')//chamando banco de dados

const Task = require('./models/Task')//chamando models

const tasksRoutes = require('./routes/tasksRoutes') //importar as rotas do Routes

//configurações do Handlevar
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//midleware para ler o que vem no corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())//midleware para ler o JSON

app.use(express.static('public'))//Definir paginas estaticas

app.use('/tasks', tasksRoutes)

conn.sync()
.then(() => {
    app.listen(3000)//ativar o servidor na porta 3000
})

.catch((err) => console.log(err))