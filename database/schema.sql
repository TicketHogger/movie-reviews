CREATE DATABASE IF NOT EXISTS fandango;
use fandango;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
	id INT NOT NULL AUTO_INCREMENT,
	Username VARCHAR(50) NOT NULL,
	Title VARCHAR(50),
	Mooz INT NOT NULL,
	Review VARCHAR(500),
	Helpful INT,
	PRIMARY KEY (id)
);

INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Clarabelle Feil11", "Debitis minima quas", 3, "Quas odit ea. Quia corporis voluptate pariatur reprehenderit quia facere magnam. Odio iure consequatur perspiciatis animi dolor quaerat. Et omnis qui. Iusto iure est.", 299)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Ashly_Stracke", "Magni distinctio sed", 5, "Suscipit et quis minima adipisci magnam. Odit non culpa. Accusantium rerum omnis pariatur atque mollitia reiciendis quae.", 138)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Dawson31", "Hic quaerat qui", 5, "Corrupti fuga sit possimus. Est et pariatur aut quaerat. Ut quia sed doloribus et. Repudiandae facilis omnis aut. Vitae animi doloribus commodi placeat. Architecto quis possimus nulla eius itaque.", 273)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Dallin_Yost52", "Vel corrupti deserunt odio", 3, "Dolorum nulla id repellat sint. Quo omnis consequatur qui ex est. Veniam fugit officia harum sunt.", 96)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Amy_Ward78", "Tempora ea", 3, "Non quia ipsam ratione pariatur amet et. Quis quis assumenda veniam laborum eligendi sed dolorem cum odio. Consequatur reiciendis sunt consequatur.", 217)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Vance_Heidenreich91", "Nihil", 1, "Veniam suscipit tenetur temporibus soluta qui delectus consectetur modi et. Aut molestiae dolorum non alias possimus qui mollitia. Culpa libero eius autem. In nesciunt praesentium eum laboriosam et aperiam minus veritatis.", 156)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Clement_Torphy85", "Autem animi aut eaque impedit", 4, "Quia sit enim nam cupiditate eos officia. Et quo magnam. Maiores nulla saepe accusantium qui. Quod aut exercitationem aut commodi. Aliquid provident ut ut. Dolorem asperiores velit.", 143)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Roosevelt41", "Ullam a consectetur voluptates", 5, "A esse corporis harum error et. Fugit similique iure temporibus adipisci non labore animi. Et sunt sapiente qui voluptate vero. Qui possimus minus ut consequuntur ut aut maiores. Tempora aspernatur harum qui aliquid assumenda. Iusto esse perspiciatis repellat repellat qui soluta voluptate tenetur et.", 8)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Margarett Funk57", "Sunt id aut voluptas sit", 5, "Quibusdam ipsum in qui autem libero aut cum. Aliquam quisquam ea maiores accusantium veritatis mollitia. Rerum possimus dolores aut ut. Beatae velit voluptatem consequatur nostrum quia voluptas aut.", 258)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Marty52", "Magni debitis eius", 4, "Repellendus officia velit quia. Qui doloremque incidunt delectus ut iusto rerum temporibus id voluptatem. Quam quasi quia veniam sit.", 112)
