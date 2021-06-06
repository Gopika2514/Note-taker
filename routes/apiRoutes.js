const router = require('express').Router();
const fs = require('fs');

// create a route that respondes with all notes coming from the database

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.send(data);
    })

})

router.post('/notes', (req, res) => {
    console.log(req.body);
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        var json = JSON.parse(data);
        req.body.id = json.length;
        json.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            res.send(req.body)
        })
    })
})










module.exports = router;