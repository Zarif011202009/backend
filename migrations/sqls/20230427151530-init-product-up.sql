CREATE TABLE product (
    "id" SERIAL PRIMARY KEY,
    "category" VARCHAR(255) NOT NULL,
    "condition" VARCHAR(255) NOT NULL,
    "priority" INTEGER
);