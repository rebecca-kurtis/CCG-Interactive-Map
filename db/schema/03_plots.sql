-- DROP and CREATE plots TABLE
DROP TABLE IF EXISTS plots CASCADE;

CREATE TABLE plots (
plot_id SERIAL PRIMARY KEY NOT NULL,
user_id INT,
FOREIGN KEY(user_id) REFERENCES users ON DELETE CASCADE,
plantsGrowing VARCHAR(255) NOT NULL,
garden_id INT,
FOREIGN KEY(garden_id) REFERENCES gardens ON DELETE CASCADE
);  