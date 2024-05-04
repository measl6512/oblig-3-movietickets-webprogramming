CREATE TABLE tickets (
                         id INTEGER AUTO_INCREMENT PRIMARY KEY,
                         firstname VARCHAR(255) NOT NULL,
                         lastname VARCHAR(255) NOT NULL,
                         phonenumber VARCHAR(20) NOT NULL, -- Considering international phone numbers and characters like "+"
                         mail VARCHAR(255) NOT NULL,
                         movie VARCHAR(255) NOT NULL,
                         amount SMALLINT NOT NULL
);
