const { write, list } = require('../controllers/board.controller');
module.exports = x =>{
    x.app.post(`${x.url}/write`, write) 
    x.app.get(`${x.url}/list`, list) 

} 