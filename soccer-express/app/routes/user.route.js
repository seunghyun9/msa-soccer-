const { write } = require('../controllers/board.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;


/**
var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

module.exports = function(app){
  app,use((req,res,next)=>{
    res.hearder(

    )
  });
  //next();
  app.get("", ()=>{})
  app.post("http://localhost:5000/api/board/write", (req,res)=>{})
  app.update("", ()=>{})
  app.delets("", ()=>{})

};
*/