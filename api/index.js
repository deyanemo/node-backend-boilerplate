const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const products_route = require('./routes/products.route')
const morgan = require('morgan');


const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));



app.use('/products', products_route);




app.listen(port, () => console.log(`listening on http://localhost:${port}`));




module.exports = app;