const Sequelize = require('sequelize');
db = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/bulletinboard`);

// Messages must be stored in a postgres database. Create a "messages" table with three columns: column name / column data type:

// id: serial primary key
// title: text
// body: text

// define a simple message model
db.Message = db.define('message', {
    title: Sequelize.STRING,
    body: Sequelize.STRING
});



//Second Page
 // show messages of the peopele who posted
 // make a navigate bar



//server staat open voor connecties

db.sync(
    {force : true}
) // ensures the table exists and drops the old table
    .then(function(db){
        const message1 = {
            title: "voetbal",
            body: "ik ben Bert Maalderink"
        }
        const message2 = {
            title: "nieuws",
            body: "ik ben Gerry Eickhoff"
        }
        db.Message.create(message1)
        db.Message.create(message2)
    })
    .catch( (error) => console.log(error));
    module.exports = db
