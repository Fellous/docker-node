# Utiliser l'image officielle de Node.js
FROM node:14

# Créer et définir le répertoire de l'application
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour lancer l'application
CMD ["npm", "start"]
