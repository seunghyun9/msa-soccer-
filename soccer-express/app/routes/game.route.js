const { write } = require('../controllers/game.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;