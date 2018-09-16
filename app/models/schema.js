var schema = {
    user: {
        username: String,
        name: String,
        email: String,
        password: String
    },

    bizu: {
        title: String,
        text: String,
        subject: String,
        creator: String
    },
    
    rank: {
        idBizu: Number,
        user: String,
        grade: Number
    }
}

module.exports = schema