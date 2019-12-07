DROP DATABASE IF EXISTS testing;
CREATE DATABASE IF NOT EXISTS testing;
USE testing;

DROP TABLE IF EXISTS usuario;
CREATE TABLE IF NOT EXISTS usuario (
       id int NOT NULL,
       nombre varchar(30) NOT NULL,
       apellido varchar(35) NOT NULL,
       PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (id, nombre,apellido) VALUES 
(1, 'Cesar','Chavez'),
(2, 'Karla','Ricalde'),
(3, 'Irving','Alvarez'),
(4, 'Manuel','Chavez'),
(5, 'Jonathan','Chavez'),
(6, 'Cristian','Chavez'),
(7, 'Cesar','Perez');

