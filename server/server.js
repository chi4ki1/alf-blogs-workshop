require('dotenv').config();

const express = require('express');
const app = express();
const connectDb = require('./config/db');

//connecting to database
connectDb();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Guys'});
})

// Post Routes:
const postRouter = require('./routers/postRouter')
app.use('/posts', postRouter)

app.listen(8080, () => {
    console.log("Server is running in port 8080");
});