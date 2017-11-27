const express = require('express');
const router = express.Router();

// GET list of all books
router.get('/', (req, res, next) => {
    res.render('books/all', { title: 'Books' });
});

// GET new book page
router.get('/new', (req, res, next) => {
    res.render('books/new', { title: 'New Book' });
});

// GET list of overdue books
router.get('/overdue', (req, res, next) => {
    res.render('books/overdue', { title: 'Overdue Books' });
});

// GET list of checked out books
router.get('/checked', (req, res, next) => {
    res.render('books/checked', { title: 'Checked Out Books' });
});

module.exports = router;