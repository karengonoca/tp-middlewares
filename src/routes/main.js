const express = require('express');
const router = express.Router();

const {index, music, contact, admin, login, noAccess} = require('../controllers/mainController')
const accessAdmin = require('../middlewares/accessAdmin');


router
    .get('/', index)
    .get('/music', music)
    .get('/contact', contact)
    .get('/admin', accessAdmin, admin)
    .get('/login', login)
    .get('/noAccess', noAccess)


module.exports = router;