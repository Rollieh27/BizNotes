const notesRouter = require("express").Router();
const { createNote, deleteNote } = require("../lib/notes");

let notesContent = require("../db/db");

notesRouter.get("/notes", (req, res) => {
    let data = notesContent;
    res.json(data);
});

notesRouter.post("/notes", (req, res) => {
    req.body.id = notesContent.length + 1;
    res.json(createNote(req.body, notesContent));
});

notesRouter.delete("/notes/:id", async (req, res) => {
    const { id } = req.params
    notesContent = await deleteNote(id, notesContent);
    res.json(notesContent);
});

module.exports = notesRouter;