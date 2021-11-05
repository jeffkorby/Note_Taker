const express = require ('express');
const path = require ('path');
const apiRoutes = require ('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 4200;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log(`server started on port ${PORT}`));
