const express = require('express');
const soccerRouter = express.Router(); 
soccerRouter.use(function log(req, res, next) {
    console.log('### 축구 ###');
    next();
  });
  module.exports = soccerRouter;