const express = require('express')
const app = express()
const loginRoute = require('./routes/login')
const cors = require('cors')
const dbConnect = require('./database/db')


app.get('/', (req,res) => {
    res.send("Welcome to this")
})

app.use(cors())
app.use(express.json())
app.use('/',loginRoute)

app.listen('4000', () => {
    dbConnect();
}
)