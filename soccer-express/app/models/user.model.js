 /**const mongoose = require('mongoose')
package.json에서 필요한것만 가져온다. 경량화 */
module.exports = mongoose => mongoose.model('user',
        mongoose.Schema(
            {
                username : String,
                password : String,
                name: String,
                telephone: String
            }, {timestamps:true}
        )
    )


