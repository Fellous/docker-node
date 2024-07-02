// index.js

const express = require('express');
const path = require('path');
const sequelize = require('./db'); // Assurez-vous d'importer votre instance Sequelize
const Profile = require('./models/profile');
const Hobby = require('./models/hobbies');

const app = express();
const port = 3000;

// Configurer le dossier des vues et le moteur de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurer le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Définir les associations entre les modèles si nécessaire
Profile.hasMany(Hobby); // Un profil peut avoir plusieurs hobbies
Hobby.belongsTo(Profile); // Un hobby appartient à un seul profil

// Synchroniser les modèles avec la base de données
sequelize.sync({ force: true }) // Utilisez { force: true } en développement pour réinitialiser la base de données
  .then(() => {
    console.log('Database synchronized.');

    // Exemple de création de données initiales
    return Profile.create({
      name: 'Daniel',
      description: 'Un geek super cool qui fait du sport, regarde des animés et joue à des jeux vidéo.',
      image: '/img/daniel.jpg'
    })
    .then(profile => {
      return Hobby.create({ name: 'Sport' })
        .then(hobby => profile.addHobby(hobby))
        .then(() => {
          console.log('Tables créées et données ajoutées avec succès.');
        });
    });
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation des modèles:', err);
  });

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
