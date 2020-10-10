const model = require('../db/models.js');

const controller = {
    get: (req, res) => {
        model.get((err, data) => {
            if (err) {
                req.status(400).send('Controller: Error in get');
            } else {
                res.status(200).send(data);
            }
        })
    }
    // post:
    // update:
    // delete:
}

module.exports = controller;