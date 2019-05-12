const router = require("express").Router();

let DietModel = require('../../models/diet');
const dietService = require("../../services/diet");

router.get("/all", (req, res, next) => {
    dietService.findAll((err, data) => {
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

//CREATE
router.post('/',(req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }
    if(!req.body.description){
        // ...
    }


    let model = new DietModel(req.body);
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

//UPDATE
/*localhost:3000/api/component/component?name=oo*/
router.put('/diet', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("Missing URL parameter: name")
    }
    DietModel.findOneAndUpdate({
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

router.delete('/diet', (req, res) => {
    if(!req.query.name){
        return res.status(400).send("Missing URL parameter: name")
    }
    DietModel.findOneAndRemove({
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