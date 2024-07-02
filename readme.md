

# Date Docker Profile

Ce projet est une application Node.js qui affiche des profils d'utilisateurs à partir d'une base de données MySQL. L'application utilise Docker pour faciliter le déploiement et la gestion des environnements. Les profils peuvent être visualisés et navigués grâce à une interface utilisateur élégante et réactive.

## Contenu

- [Aperçu](#aperçu)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Explications Techniques](#explications-techniques)
- [Captures d'Écran](#captures-décran)
- [Contributions](#contributions)
- [Licence](#licence)

## Aperçu

L'application affiche une liste de profils avec des descriptions, des hobbies et des images. Les utilisateurs peuvent naviguer entre les différents profils à l'aide de boutons de navigation.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/Fellous/docker-node.git
    cd docker-node
    ```

2. Construisez et démarrez les conteneurs Docker :
    ```bash
    docker-compose up --build
    ```

## Utilisation

1. Accédez à l'application dans votre navigateur :
    ```
    http://localhost:3000
    ```

2. Utilisez les boutons "Précédent" et "Suivant" pour naviguer entre les profils.

## Structure du Projet

```
daniel_docker/
├── img/
│   ├── anaia.jpg
│   ├── daniel.jpg
│   ├── david.jpg
│   └── gad.jpg
├── node_modules/
├── public/
│   └── styles.css
├── views/
│   └── profile.ejs
├── app.js
├── docker-compose.yml
├── Dockerfile
├── init.sql
├── package.json
└── package-lock.json
```

### Explications Techniques

#### `app.js`

Ce fichier configure le serveur Express, gère les routes et la connexion à la base de données MySQL.

#### `docker-compose.yml`

Ce fichier définit et exécute des applications multi-conteneurs Docker, configurant les services pour l'application et la base de données.

#### `Dockerfile`

Ce fichier construit l'image Docker de l'application, installe les dépendances et définit la commande pour exécuter l'application.

#### `init.sql`

Ce fichier initialise la base de données MySQL avec le schéma et les données nécessaires.

#### `package.json`

Ce fichier gère les dépendances et les scripts du projet.

#### `views/profile.ejs`

Ce modèle EJS affiche les données de profil dynamiquement, y compris les noms, descriptions, hobbies et images.

#### `public/styles.css`

Ce fichier contient les styles CSS pour l'application, assurant une apparence visuelle cohérente et attrayante.

## Captures d'Écran

![Capture d'écran](file-Ekvr7NyED25idLiaEeYosA6T.png)

## Contributions

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

