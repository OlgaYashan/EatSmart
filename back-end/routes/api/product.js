const router = require("express").Router();

let ProductModel = require('../../models/product');
const productService = require("../../services/product");

router.get("/all", (req, res, next) => {
  productService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      console.log(res.data);
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});



/*
//localhost:3000/product?name=Olga&surname=Yashan
router.get('/',(req,res) => {
    if(req.query.name){
        res.send('You have request a product ' + req.query.name);
    }
    else{
        res.send('You have request a product');
    }
    
});

//localhost:3000/product/Olga
router.get('/:name',(req,res) => {
    res.send('You have request a product ' + req.params.name);
})*/

//CREATE
router.post('/',(req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }
    if(!req.body.description){
        // ...
    }

    /*let user = {
        name: "Olga Yashan",
        email: "olga.yashan97@gmail.com"
    }*/

    let model = new ProductModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//READ
router.get('/product', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("Missing URL parameter: name")
    }
    ProductModel.findOne({
        name: req.query.name
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//READ
router.get('/barCode', (req, res) => {
    ProductModel.findOne({
        barCode: req.query.barCode
    })
        .then(doc => {
            if(doc == null){res.status(400).send("Errror")}
            else{
              res.json(doc)
            }})
        .catch(err => {
            res.status(500).json(err)
        })
})


//UPDATE
router.put('/product', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("Missing URL parameter: name")
    }
    ProductModel.findOneAndUpdate({
        name: req.query.name
    }, req.body, {

        new: true
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
} )

router.delete('/product', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("Missing URL parameter: name")
    }
    ProductModel.findOneAndRemove({
        name: req.query.name
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router;