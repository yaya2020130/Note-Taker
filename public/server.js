// DEPENDENCIES

const express = require("express");
const path = require("path");

const app = express()

const fs = require("fs")
// SETS UP THE EXPRESS app
// =================================
const PORT = process.env.PORT || 8080;



// sets up the express app to handle data parcing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// note taker container

const notesArr = []

// /basic routes that sends the user first to the AJAX page

// html routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "note.html"))
})

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))

})

// =================================

// Data Routes

// get

app.get('/api/notes', function (req, res) {

  retrieveNotes();
  res.json(notesArr)
})

// ==========================


// the post adds new note  to the list 
app.post('/api/notes', function (req, res) {
  const newNote = saveNewNote(req.body)

  return res.json(newNote)
})

// DELETE :DELTES A NOTE FROM THE NOTE 
app.delete('/api/notes/:id', function (req, res) {
  deleteNote(req.params.id);
  return res.jason.noteArr;
});


// it will retrieve the data from the file
function retrieveNotes() {
  fs.readFile('./db/db.jason', "utf8", function (error, saveData) {

    if (error) {
      return console.log(error)
    }

    notesArr.length = 0
    let arr = JSON.parse(savedData);
    arr.forEach(element => {
      const newNote = {
        title: element.title,
        title: element.text,
        text: element.id
      }
      notesarr.push(newNote)
    })


  })
}
// =====================


// listening

app.listen(PORT, function () {

  console.log(`listen to to the smooth of port ${PORT}`)
})

