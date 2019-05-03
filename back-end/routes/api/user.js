const router = require("express").Router();
const userService = require("../../services/user");
let UserModel = require('../../models/user');


router.get("/all", (req, res, next) => {
  userService.findAll((err, data) => {
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

//READ
//localhost:3000/product?login=Olga&password=Yashan
router.get('/', (req, res) => {
  if(!req.query.login){
      return res.status(400).send("Missing URL parameter: login")
  }
  if(!req.query.password){
    return res.status(400).send("Missing URL parameter: password")
}
  UserModel.findOne({
      login: req.query.login,
      password: req.query.password
  })
      .then(
        doc => {
          if(doc == null){res.status(400).send("Errror")}
          else{
            res.json(doc)
          }
          
      })
      .catch(err => {
          res.status(500).json(err)
      })
})


router.get("/:id", (req, res, next) => {
  userService.findOne(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});


//UPDATE
router.put('/products', (req, res) => {
  if(!req.query.login){
    return res.status(400).send("Missing URL parameter: login")
}
if(!req.query.password){
  return res.status(400).send("Missing URL parameter: password")
}
  UserModel.findOneAndUpdate({
      login: req.query.login
  }, req.body, {

      new: true
  })
      .then(doc => {
          res.json(doc)
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err)
      })
} )

router.get("/505/error", (req,res) => {
  throw new Error('This is a forced error.');
});


module.exports = router;
