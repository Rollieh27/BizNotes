const fs = require("fs");
const path = require("path");

function createNote(body, notesContent) {
  const newNote = body;
  notesContent.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesContent)

  );

  return newNote;
}

function deleteNote(note, notesContent) {
    const noteIndex = notesContent.indexOf(note);
    notesContent.splice(noteIndex, 1);

  let i = 0;

  notesContent.forEach(note => {
    note.id = i;
    i = i + 1;

  });

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesContent })

  );

  return notesContent;
};

module.exports = {
  createNote, deleteNote

};