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

INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Zachariah Hodkiewicz", "Odio aliquid maxime voluptatem", 4, "Repellendus eos et omnis. Omnis voluptatem tempora nesciunt. Doloribus sunt reiciendis. Ducimus doloribus sed quisquam. Mollitia est tempore.", 77)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Helmer Schmidt0", "Vel omnis", 1, "Earum repellat atque. Odit velit fugit sit. Et eos culpa earum esse et modi necessitatibus. Sunt est labore at pariatur quo officiis. Ea quia id culpa sint voluptas aperiam aspernatur.", 191)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Adriana84", "Magni dolorum perferendis beatae", 5, "Ea incidunt eveniet. Qui nesciunt ipsam culpa quos totam dignissimos sed. In ex vero vel voluptatem. Ut et velit delectus voluptatem qui aut aut iste voluptates. Rerum illum totam porro quisquam sapiente eos molestias enim laborum.", 296)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Conor95", "Voluptas assumenda voluptatum", 4, "Omnis aperiam omnis odit et necessitatibus impedit repellat eum sint. Dolorem quia ut. Sed cumque autem quidem corporis magni odit sed. Natus quia corporis molestias aperiam perspiciatis culpa nesciunt illum.", 133)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Gwen Wintheiser17", "Non est consequuntur et", 4, "Consectetur aut iure nihil veritatis. Exercitationem ad velit ipsam eum. Et corporis modi. Et quas quaerat hic inventore. Harum et molestias et consequatur in perferendis illum. Non non omnis non sed dolorem eius eius odio aut.", 76)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Sister91", "In cupiditate libero repellendus", 2, "Sint adipisci voluptas nobis repudiandae dignissimos odio. Recusandae vel impedit. Sint consequatur et dolore est vel aut fugit minima sed. Ex illo qui debitis mollitia mollitia vitae quod minima. Sequi neque beatae quo nobis non vero impedit corrupti fugiat. Molestias sit similique voluptatem tempora voluptatum eligendi id reiciendis iusto.", 192)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Luciano15", "Voluptatem voluptas rerum enim dolor", 5, "Quasi sed inventore. Nostrum rerum sit est sit incidunt recusandae. Natus labore illum corrupti qui qui culpa quae nihil facere.", 156)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Jesus_Wolf", "Est nesciunt quis et et", 3, "Numquam rerum officia in laboriosam at. Est dolor dolores quidem ut sit tempore tempore. Explicabo sint non impedit sunt beatae asperiores necessitatibus nam cupiditate.", 102)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Humberto29", "Architecto officiis", 4, "Mollitia sequi non eius architecto id optio. Et eaque libero laborum eveniet dignissimos. Quos iure repellat doloremque. Deleniti repellat id molestias necessitatibus reprehenderit reiciendis expedita. Atque magnam modi aut et assumenda ratione magnam eos excepturi. Doloribus magni aut repudiandae nisi sit cumque ea.", 155)
INSERT INTO movies (Username, Title, Mooz, Review, Helpful) VALUES ("Laury Jacobi", "Quidem aut sit aut quae", 1, "Ut iusto velit. Nostrum nobis numquam pariatur iure at neque. Quaerat sed natus voluptatem et aperiam eos iste. Sint nobis sed officia et quis eveniet eum. Tempora suscipit velit quas architecto nesciunt.", 70)
