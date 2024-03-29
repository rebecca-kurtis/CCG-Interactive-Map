-- DROP and CREATE users TABLE
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY NOT NULL,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
description VARCHAR(2000) NOT NULL,
username VARCHAR UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
admin_user BOOlEAN NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);  