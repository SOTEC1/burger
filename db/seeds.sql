CREATE TABLE burger (
  id INTEGER(11) NOT NULL AUTO INCREMENT,
  burger VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

INSERT INTO burger
(burger)
VALUES
("Cheddar BBQ Bacon Burger"),
("Jersey Burger"),
("Veggie Burger");