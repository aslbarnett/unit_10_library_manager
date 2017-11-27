const express = require('express');
const router = express.Router();

// GET list of all patrons
router.get('/', (req, res, next) => {
    res.render('patrons/all', { title: 'Patrons' });
});

// GET new patron page
router.get('/new', (req, res, next) => {
    res.render('patrons/new', { title: 'New Patron' });
});

module.exports = router;