const note = JSON.parse(fs.readFileSync("./db/db.json"));
const fs = require('fs');
const router = require('express').Router();

router.get('/notes/', (req, res) => {
    res.json(note);
});

router.post('/notes', (req, res) => {
    let newNote = req.body;
    note.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(note));
    res.json(note);
})

module.exports = router;