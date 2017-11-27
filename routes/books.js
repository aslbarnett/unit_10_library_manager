const express = require('express');
const router = express.Router();

// GET new book page
router.get('/new', (req, res, next) => {
    res.render('books/new', { title: 'New Book' });
});

module.exports = router;