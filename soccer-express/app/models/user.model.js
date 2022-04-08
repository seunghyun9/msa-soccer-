 /**const mongoose = require('mongoose')
package.json에서 필요한것만 가져온다. 경량화 */
module.exports = mongoose => mongoose.model('user', // db에서 자동으로 복수형인 users로 바꿔줌
        mongoose.Schema(
            {username: String,
            password: String,
            name: String,
            telephone: String
            }, { timestamps: true}
          )
        )

