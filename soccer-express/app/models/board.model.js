module.exports = mongoose => mongoose.model('board', // db에서 자동으로 복수형인 users로 바꿔줌
        mongoose.Schema(
            {passengerId: String,
                name: String,
                team: String,
                teamId: String,
                subject: String
            }, { timestamps: true}
          )
        )