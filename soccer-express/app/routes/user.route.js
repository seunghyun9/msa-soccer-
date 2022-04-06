const { singup } = require('../controllers/user.controller');
module.exports = x => x.app.post(`${x.url}/sign-up`, singup) ;
