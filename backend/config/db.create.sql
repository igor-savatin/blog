create database blog;
CREATE USER 'blog'@'%' IDENTIFIED BY 'Blog@123';
GRANT ALL PRIVILEGES ON * . * TO 'blog'@'%';
flush PRIVILEGES;
use blog;
CREATE TABLE IF NOT EXISTS post (
    `id`  BIGINT UNSIGNED AUTO_INCREMENT,
    `title` varchar(100),
    `text` text,
    primary key (id)
);