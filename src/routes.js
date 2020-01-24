const express = require('express');
const UserController = require('./Controllers/UserController');
const cors = require('cors');
const routes = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser=bodyParser.urlencoded({extended:false});

routes.get('/users',cors(),UserController.index);

routes.post('/users',cors(),urlencodedParser ,UserController.store);
routes.delete('/users/:user_id',cors(),urlencodedParser ,UserController.delete);

module.exports = routes;