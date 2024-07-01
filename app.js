const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurer le dossier des vues et le moteur de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurer le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Route pour la page de profil
app.get('/', (req, res) => {
  const profile = {
    name: "Daniel",
    description: "Un geek super cool qui fait du sport, regarde des animés et joue à des jeux vidéo.",
    hobbies: ["Sport", "Animé", "Jeux vidéo"],
    image: "/img/daniel.jpg"
  };
  res.render('profile', { profile });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
