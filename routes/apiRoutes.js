const router = require('express').Router();
const { Router } = require('express');
const fs = require('fs');
const Save = require('../db/Save');
//gets all notes

router.get('/notes', function(req,res) {
    Save
        .getNotes()
        .then(notes => res.json(notes))
        .catch(error => res.status(500).json(error));

});
 //read the db.json file and return all saved notes as JSON
//get single note
router.get('/notes/:id', function (req, res) {
    Save    
        .getNote(req.params.id)
        .then(note => res.json(note))
        .catch(error => res.status(500).json(error));

    return res.json(note);
});

//post recieve a new note to save on req. body
//add it to db.json file
//find a way to give each note a unique ID
router.post('/notes', (req, res) => {
    Save
        .addNote(req.body)
        .then((note) => { res.json(note)})
        .catch(error => res.status(500).json(error));
});

//delete a note (bonus)
router.delete('/notes/:id', function (req, res) {
    Save    
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(error => res.status(500).json(error));
});

module.exports = router;