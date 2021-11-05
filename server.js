const express = require ('express');
const path = require ('path');
//const api = require ('./routes')

const PORT = process.env.PORT || 4200;

const app = express();

app.use(express.static('public'));
app.use('/', require ('./routes/notes.js'));



app.listen(PORT, () => console.log(`server started on port ${PORT}`));
