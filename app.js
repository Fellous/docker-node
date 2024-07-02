const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuration de la base de données
const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'profiles_db',
  charset: 'utf8mb4'
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);

  connection.connect(function(err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('Connected to the MySQL database.');
    }
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
  connection.query('SELECT * FROM profiles', (err, results) => {
    if (err) {
      res.status(500).send(err.toString());
      return;
    }
    res.render('profile', { profile: results[0], index: 0, profiles: results });
  });
});

app.get('/profile/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  connection.query('SELECT * FROM profiles', (err, results) => {
    if (err) {
      res.status(500).send(err.toString());
      return;
    }
    if (index >= 0 && index < results.length) {
      res.render('profile', { profile: results[index], index: index, profiles: results });
    } else {
      res.status(404).send('Profile not found');
    }
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
