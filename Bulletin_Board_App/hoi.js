// or const db = require(__dirname + 'models/db.js')
// then after Popsiscles.creat(onePopsicle): dib.Chupachups.findAll()
// and then below code: module.exports = {database: db, Chupachups: Popsicles}

const Popsicles = db.define('popsicles', {
    flavor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,    
    }
    const onePopsicle = {
        flavor: "vanilla",
        color: "yellow",
        price: 1,99,
    }
    conste anotherPopsicle = {
        flavor: "blueberry",
        color: "blue",
        price: 10,99        
    }
    Popsiscles.create(onePopsicle)
    then((apopsicle) => {
        Popsicles.create(anotherPopsicle)
    })
});
.catch( error) => console.log(error) );
// dit allemaal in db.js

app.get('/ping', function (req, res) {
    res.send('pong')
});

app.get('/getPopsicle', function (req, res) {
    Popsicles.findAll()
    .then((allPopsicles) => {
        console.log('logging allPopsicles')
        console.log(allPopsicles)
        res.send(allPopsicles)
        // or res.render('index', allPopsicles) and then a pug for loop for all popsicles
        // what gets of the output of Popsicles.findAll() goes into .then((allPopsicles))
    })
    // synchr programming: const allPopsicles = Popsicles.findAll()
    // res.render(allPopsicles)
});


app.listen(3000);


process.env.POSTGRES_USERNAME

const connectionString = 'postgress://' +process.env.POSTGRES_USER + ':' + process.env.POSTGRESS_PASSWORD + '@localhost/bulletinboard';
pg.connect(connectionString, function (err, client, done) {
    if (err) throw err;

    client.query('select * from hats', function (err, result) {


    done();
    pg.end();
    }
})

cleint.query('insert into hats'
    (keys, keys, keys, keys)
    values
    ('values', 'values', 'values', 'values')