const db = require('./db');

class Groceries {
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    // CREATE
    static add(name, quantity) {
        return db.one(`insert into groceries (name, quantity)
            values
                ($1, $2)
            returning id
        `, [name, quantity]) 
    }

    // RETRIEVE
    static getAll() {
        return db.any('select * from groceries').then(groceryArray => {
            let instanceArray = groceryArray.map(groceryObj => {
                let u = new Groceries(groceryObj.id, groceryObj.name, groceryObj.quantity);
                return u;
            });
            return instanceArray;
        })
    }

    static getById(id){
        return db.one(`select * from groceries where id = $1`, [id])
            .then(result => {
                const u = new Groceries(result.id, result.name, result.quantity)
                return u;
            })
    }

    // UPDATE
    updateQuantity(quantity) {
        return db.result(`update groceries
                            set quantity=$2
                            where id=$1`, [this.id, quantity]);
    }
    
    updateName(name) {
        return db.result(`update groceries
                            set name=$2
                            where id=$1`, [this.id, name]);
    }


    // DELETE
    delete() {
        return db.result(`delete from groceries where id = $1`, [this.id]);
    }
    
    static deleteById(id){
        return db.result(`delete from groceries where id = $1`, [id]);
    }
}

// Export
module.exports = Groceries;