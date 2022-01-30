const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", (req, res) => {
  const notes = req.body; 
  res.json(notes)
});

app.listen(PORT, function() {
    console.log(`app is listening on port: ${PORT}`)
});