CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(320) UNIQUE NOT NULL,
    "phone" VARCHAR(20),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "deleted_at" TIMESTAMPTZ
);