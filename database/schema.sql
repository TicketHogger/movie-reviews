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

INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Sam Lockman69", "Voluptatem natus", 5, "Omnis nobis repudiandae consequatur similique. Porro odio id velit iste non. Aut enim dolorum exercitationem est.", 70);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Darian_Beahan", "Dolores in expedita voluptatibus", 3, "Voluptatem ut excepturi sit aut sit. Commodi qui illum nobis. Eligendi corporis ad id.", 7);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Rickie_Hermann90", "Fugit veritatis nemo veniam corrupti", 2, "Laborum voluptates sed. Dolorum amet laudantium dolorem. Cumque inventore qui sapiente. Qui repellendus maiores. Culpa totam a enim laboriosam et reiciendis reprehenderit hic et. Maiores omnis voluptates dolorem voluptatum sit consequatur delectus cumque.", 238);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Nyasia Hettinger", "Dicta et et eius", 4, "Vero atque laudantium non molestias perspiciatis omnis explicabo iusto. Aliquid id aut sed officiis reprehenderit iusto. Et quo mollitia. Sint maiores perspiciatis laborum.", 98);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Kyla79", "Molestiae excepturi nemo", 5, "Fugiat id ut ab et. Qui dolorem sit et minima aut quisquam. In ullam maiores enim.", 113);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Muriel_Donnelly31", "Voluptatem earum quia illo est", 1, "Dolores aut ex sint aut consequatur commodi. Ut aperiam rem consequuntur aliquid omnis facere. Esse corrupti atque corporis et cumque eaque in qui rem.", 100);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Lisandro Russel", "Quis ea velit aliquid dolore", 2, "Mollitia dolorem nemo odit velit quisquam tempora. Minus porro quo quam ipsam autem qui consectetur ut quia. Deleniti velit qui tempora. Totam voluptas et tenetur vel unde praesentium atque omnis.", 53);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Selmer78", "Ut perferendis nihil cupiditate ipsam", 5, "Illum sapiente enim ut laborum saepe deserunt sunt. In et omnis possimus qui nostrum omnis. Quod nemo velit rerum sunt. Molestiae deleniti amet accusamus vitae quia ea.", 281);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Mara_Treutel", "Dolore", 1, "Voluptatem qui veniam hic consequatur. Eligendi est architecto id facere explicabo fuga eum explicabo rem. Iste nemo omnis voluptas et. Consequatur expedita et repellat at aut earum. Sit alias occaecati.", 164);
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Ozella_Konopelski", "Provident et voluptate", 2, "Saepe nesciunt et sequi vel sed tempora recusandae inventore. Aperiam qui ab libero quia labore qui quod qui. Et quibusdam et deserunt nihil.", 116);
