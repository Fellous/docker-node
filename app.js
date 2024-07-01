const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

const profiles = [
  {
    name: "Daniel",
    description: "Un geek super cool qui fait du sport, regarde des animés et joue à des jeux vidéo.",
    hobbies: ["Sport", "Animé", "Jeux vidéo"],
    image: "/img/daniel.jpg"
  },
  {
    name: "David",
    description: "Un gourmand mais fait du sport. Extrêmement beau mais cherche uniquement des bombasses et surtout pas de Créteil.",
    hobbies: ["Gastronomie", "Fitness"],
    image: "/img/david.jpg"
  },
  {
    name: "Gad",
    description: "Un tueur en série. Sa dernière cible était une fille de Créteil.",
    hobbies: ["Chasse", "Mystère"],
    image: "/img/gad.jpg"
  },
  {
    name: "Anaia",
    description: "Une fille marocaine blonde aux yeux bleus (pour de faux). Elle est possessive et ses passions sont les gâteaux et le maquillage.",
    hobbies: ["Gâteaux", "Maquillage" , "Libertinage"],
    image: "/img/anaia.jpg"
  }
];

app.get('/', (req, res) => {
  res.render('profile', { profile: profiles[0], index: 0, profiles: profiles });
});

app.get('/profile/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (index >= 0 && index < profiles.length) {
    res.render('profile', { profile: profiles[index], index: index, profiles: profiles });
  } else {
    res.status(404).send('Profile not found');
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
