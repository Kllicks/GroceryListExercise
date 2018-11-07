require('dotenv').config();

const Groceries = require('./models/Groceries');

// FOR TESTING:
// ============

// CREATE
// ------
// Groceries.add(`goldfish`, 5)
//     .then(result => {
//         console.log(result);
//     })

// RETRIEVE
// --------
Groceries.getAll()
    .then(results => {
        console.log(results);
        console.log('those were the groceries');
    })

// Groceries.getById(5)
//     .then(result => {
//         console.log(result);
//     })

// UPDATE
// ------


// DELETE
// ------
// Groceries.deleteById(10)
//     .then(result => {
//         console.log(result.rowCount);
//     })