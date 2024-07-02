CREATE DATABASE profiles_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE profiles_db;

CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  hobbies TEXT NOT NULL,
  image VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO profiles (name, description, hobbies, image) VALUES
('Daniel', 'Un geek super cool qui fait du sport, regarde des animés et joue à des jeux vidéo.', 'Sport, Animé, Jeux vidéo', '/img/daniel.jpg'),
('David', 'Un gourmand qui fait du sport, extremement beau mais cherche uniquement des bombasses mais surtout pas de Créteil.', 'Gastronomie, Sport, Beaute', '/img/david.jpg'),
('Gad', 'Un tueur en série, sa dernière cible était une fille de Creteil.', 'Chasse, Enquête, Discrétion', '/img/gad.jpg'),
('Anaia', 'Une fille marocaine blonde aux yeux bleus (pour de faux), elle est libertine comme on peut voir sur son profil, ses passions sont les gâteaux et le maquillage.', 'Gâteaux, Maquillage, Libertinage', '/img/anaia.jpg');
