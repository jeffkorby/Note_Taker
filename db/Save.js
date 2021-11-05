const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require(uuid);

const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);

class Save {
    read() {
        return readNotes('db/db.json', 'utf8');
    }
    write() {
        return writeNotes('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read()
        .then(notes => {
        try {
            let parsedNotes = [].concat(JSON.parse(notes));
        } catch (error) {
            console.log(error);
        }
        return parsedNotes;
        });
    }
    addNote() {
        const { title, text } = note;
            if (!title || !text) {
                throw new Error('Please include a title and text');
            }
        const newNote = { title, text, id: uuidv4() };
        return this.getNotes()
            .then(notes => [ ...notes, newNote ])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }
    removeNote() {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Save();