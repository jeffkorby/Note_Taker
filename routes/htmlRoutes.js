const router = require('express').Router();
const { builtinModules } = require('module');
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index/html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(___dirname, '../public.index.html'));
});

module.exports = router;