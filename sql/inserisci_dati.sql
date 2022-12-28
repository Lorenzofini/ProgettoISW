INSERT INTO `login` (`idlogin`, `username`, `password`, `name`, `active`) VALUES
(1, 'aleago@gamesisw.com', 'pass2023', 'alessandro agostini', 1),
(2, 'lorifini@gamesisw.com', 'pass2023', 'lorenzo fini', 1);

ALTER TABLE `login`
  MODIFY `idlogin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

INSERT INTO `game` (`idgame`, `gamename`, `platform`, `trailer`, `relasedate`, `price`, `rate`) VALUES
(1, 'Call of Duty: Modern Warfare II', 'PlayStation 5','YlhzWCK1lDQ', '23/10/2022', 64.99, 4.1),
(2, 'Call of Duty: Modern Warfare II', 'PlayStation 4','YlhzWCK1lDQ', '23/10/2022', 64.99, 2.7),
(3, 'Call of Duty: Modern Warfare II', 'Xbox One and Xbox Series X/S','YlhzWCK1lDQ', '23/10/2022', 64.99, 2.3),
(4, 'God of War Ragnarok Standard', 'PlayStation 4','ItyO3chi9bo', '09/11/2022', 53.99, 4.6),
(5, 'NBA 2K23', 'PlayStation 5','MCU18y25WeQ', '11/09/2022', 34.99, 3.0),
(6, 'NBA 2K23', 'PlayStation 4','MCU18y25WeQ', '11/09/2022', 49.99, 3.0),
(7, 'Marvel s Spider-Man: Miles Morales Ultimate Edition', 'PlayStation 5','AA11F7g2Oh4', '12/11/2022', 39.99, 4.6),
(8, 'Ratchet and Clank: Rift Apart', 'PlayStation 5','ytttHQnV4Ks', '11/06/2021', 44.99, 4.5),
(9, 'Ghost of Tsushima Director s Cut', 'PlayStation 5','KViy9f-z8Ec', '20/08/2022', 54.99, 4.7),
(10, 'Horizon Forbidden West Launch Edition', 'PlayStation 5','lT2eU0b94rw', '18/02/2022', 39.99, 4.6),
(11, 'Minecraft Starter Collection', 'PlayStation 4','di-itvdeoKI', '9/10/2018', 27.99, 4.5),
(12, 'F1 2021', 'PlayStation 4','SJ8RgNsAO0o', '16/07/2021', 29.98, 4.5);

ALTER TABLE `game`
  MODIFY `idgame` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

INSERT INTO `image` (`idimage`, `img`, `game`) VALUES
(1, 'imgGames/call-of-duty moder-warfare-II-ps5.png', 1),
(2, 'imgGames/call-of-duty modern-II-ps4.png', 2),
(3, 'imgGames/call-of-duty moder-warfare-II-Xbox.png', 3),
(4, 'imgGames/god-of-war-ragnarok-ps4.png', 4),
(5, 'imgGames/nba-2k23-ps5.png', 5),
(6, 'imgGames/nba-2k23-ps4.png', 6),
(7, 'imgGames/Marvels-Spider-Man-Miles-Morales-Ultimate-Edition---PlayStation-5.png', 7),
(8, 'imgGames/Ratchet-and-Clank-Rift-Apart---PlayStation-5.png', 8),
(9, 'imgGames/Ghost-of-Tsushima-Directors-Cut----PlayStation-5.png', 9),
(10, 'imgGames/Horizon-Forbidden-West-Launch-Edition---PlayStation-4.png',10),
(11, 'imgGames/Minecraft-Starter-Collection---PlayStation-4.png', 11),
(12, 'imgGames/F1-2021---PlayStation-4.png', 12);

ALTER TABLE `image`
  MODIFY `idimage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

INSERT INTO `kind` (`idkind`, `namekind`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Casual'),
(4, 'Educational'),
(5, 'Fighting'),
(6, 'Indie'),
(7, 'Massively Multiplayer'),
(8, 'Party'),
(9, 'Puzzle'),
(10, 'Racing'),
(11, 'RPG'),
(12, 'Shooter'),
(13, 'Simulation'),
(14, 'Sports'),
(15, 'Strategy'),
(16, 'Visual Novel'),
(17, 'Board/Card Game');


ALTER TABLE `kind`
  MODIFY `idkind` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;


INSERT INTO `kind_of_game` (`game`, `kind`) VALUES
(1, 12),
(2, 12),
(3, 12),
(4, 1),
(5, 14),
(6, 14),
(7, 1),
(8, 2),
(9, 1),
(10, 1),
(11, 1),
(12, 10);



