drop database if exists db_retrogames;
create database db_retrogames;

use db_retrogames;

create table jogos {
    id auto_increment not null,
    titulo varchar(40) not null,
    plataforma varchar(500) not null,
    desenvolvedora varchar(100) not null,
    image_url varchar(400) not null,
    preco decimal (10,2) not null,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};

insert into jogos (titulo, plataforma, desenvolvedora, genero, image_url, preco, data_cadastro) values
('Mortal Kombat II','Super Nintendo (SNES), Sega Genesis (Mega Drive), Game Boy, Game Gear, Master System, PC (MS-DOS), Amiga, Sega 32X, Sega Saturn e PlayStation','Midway Games','fighting game','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhJn9_cFcwt6Duyo6cBgvMXHFsxWT4ifOC2r9ZBha0Q&s=10', 350.00),
('Street Fighter II: The World Warrior','Arcade (Fliperama), Super Nintendo (SNES), Mega Drive/Genesis, PC Engine, Game Boy','luta competitivo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxfdi_8zTqivgNWfM19fqXnx6UDuMV9GyVzJRH9hP3w&s=10',300.00),
('Teenage Mutant Ninja Turtles IV: Turtles in Time','Arcade e Super Nintendo (SNES)','luta de rua','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXxBfULUkcd1A69ycLQ6NqxJyQHJiz5_C3yLgdMDrvw&s=10',130.00);

select * from jogos;