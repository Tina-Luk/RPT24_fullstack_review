const db = require('./index.js');

const model = {
    get: (callback) => {
        db.query('SELECT * FROM Items', (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}

module.exports = model;