require('dotenv').config(); /**몽구스 연결 지점, 은닉화 해야하기에 엔트리 지점에 두지 않음 */
const{MONGO_URL}= process.env;
const mongoose = require('mongoose') //즉시실행
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = MONGO_URL
db.user = require('./user.model')(mongoose)

module.exports=db