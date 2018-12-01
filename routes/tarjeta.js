var express = require('express'),
    router = express.Router(),
    Tarjeta = require('../models/Tarjeta');

router.post('/', function(req, res){
    var tarjeta = new Tarjeta({
        id: req.body.id,
        fecha: req.body.fecha,
        codigo: req.body.codigo
    });
    tarjeta.save(function(err){
        if(err){
            res.status(500);
            res.send({err});
        }
        res.redirect('/');
    });
});

module.exports = router;