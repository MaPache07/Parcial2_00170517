var express = require('express'),
    router = express.Router(),
    Tarjeta = require('../models/Tarjeta');

/*router.get('/', function(req, res){
    res.render('index');
});*/

router.get('/tarjeta', function(req, res){
    Tarjeta.find({}, function(err, elements){
        if(err){
            res.json({
                status: 500,
                success: false,
                err
            })
        }
        else{
            res.json({
                status: 200,
                success: true,
                elements
            })
        }
    });
});

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

router.put('/update/:id', function(req, res){
    if(req.params._id){
        Tarjeta.findByIdAndUpdate(req.params._id, function(err, res){
            if(err){
                res.json({
                    status:500,
                    success: false,
                    err
                });
            }
            else{
                res.json({
                    status: 200,
                    success: true,
                })
            }
        })
    }
});

module.exports = router;