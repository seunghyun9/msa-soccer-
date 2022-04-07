require('dotenv').config(); /**몽구스 연결 지점, 은닉화 해야하기에 엔트리 지점에 두지 않음 */
const{MONGO_URL}= process.env;
const mongoose = require('mongoose') //즉시실행 pakage.json에서 필요한것을 가져다 씀
mongoose.Promise = global.Promise // 옵저버 패턴으로 몽구스에게 전역을 쓸 수 있는 권한을 준 것 

const db = {}
db.mongoose = mongoose
db.url = MONGO_URL
db.user = require('./user.model')(mongoose)

module.exports=db