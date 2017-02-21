const Sequelize = require('sequelize');

const db = {
}

db.connect = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/bulletinboard`);

// Messages must be stored in a postgres database. Create a "messages" table with three columns: column name / column data type:

// id: serial primary key
// title: text
// body: text

// define a simple message model
db.Message = db.connect.define('message', {
    Title: Sequelize.STRING,
    Body: Sequelize.STRING
});

db.connect
    .sync({
    force: true
    }) // ensures the table exists and drops the old table
    .then(function(db){
        const message1 = {
            Title: "voetbal",
            Body: "ik ben Bert Maalderink"
        }
        const message2 = {
            Title: "nieuws",
            Body: "ik ben Gerry Eickhoff"
        }
        db.Message.create(message1)
        db.Message.create(message2)
    })
    .catch( (error) => console.log(error));

    module.exports = db
