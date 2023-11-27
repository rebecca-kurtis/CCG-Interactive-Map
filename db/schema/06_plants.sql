-- DROP and CREATE plants TABLE
DROP TABLE IF EXISTS plants CASCADE;

CREATE TABLE plants (
plant_id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
plot_id INT,
FOREIGN KEY(plot_id) REFERENCES plots ON DELETE CASCADE,
icon_id INT,
FOREIGN KEY(icon_id) REFERENCES icons ON DELETE CASCADE
);  