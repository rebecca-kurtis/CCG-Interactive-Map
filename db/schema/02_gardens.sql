-- DROP and CREATE gardens TABLE
DROP TABLE IF EXISTS gardens CASCADE;

CREATE TABLE gardens (
garden_id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
province VARCHAR(255) NOT NULL,
description VARCHAR UNIQUE NOT NULL,
website_url VARCHAR(255) NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);  