import express  from 'express';
import cors from 'cors';


import Connection from './db/conn.js';
import DefaultData from './default.js';
import Route from './routes/route.js'


const app = express();


// CORS
app.use(cors());

// Route connection
app.use('/', Route);


// PORT no where our project will run
const PORT = process.env.PORT || 3000;



// database connection
Connection();



// this is a server
app.listen(PORT, () => {
    console.log(`server is started sucessfully in port ${PORT}`)
})


// insert data of data  file
DefaultData();

