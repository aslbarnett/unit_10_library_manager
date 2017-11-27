const express = require('express');
const router = express.Router();

// GET list of all loans
router.get('/', (req, res, next) => {
    res.render('loans/all', { title: 'Loans' });
});

// GET new loan page
router.get('/new', (req, res, next) => {
    res.render('loans/new', { title: 'New Loan' });
});

// GET list of overdue loans
router.get('/overdue', (req, res, next) => {
    res.render('loans/overdue', { title: 'Overdue Loans' });
});

// GET list of checked out loans
router.get('/checked', (req, res, next) => {
    res.render('loans/checked', { title: 'Checked Out Loans' });
});

module.exports = router;