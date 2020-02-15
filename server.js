'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public/starter-code'));

// app.get('/', function (request, response) {
//   response.send('Hello World')
// })
 
// app.get('/bananas', (request, response) => {
//     response.send('I love bananas')
// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
