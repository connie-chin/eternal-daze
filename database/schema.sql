set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" text,
  "hashedPassword" text,
  "createdAt" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "categories" (
  "categoryId" serial PRIMARY KEY,
  "name" text
);
CREATE TABLE "products" (
  "productId" serial PRIMARY KEY,
  "name" text,
  "price" integer,
  "description" text,
  "imageUrl" text,
  "categoryId" int
);
CREATE TABLE "cartItems" (
  "cartItemId" serial PRIMARY KEY,
  "userId" integer,
  "productId" integer,
  "price" integer,
  "total" integer,
  "createdAt" timestamp NOT NULL DEFAULT (now())
);
ALTER TABLE "products" ADD FOREIGN KEY ("categoryId") REFERENCES "categories" ("categoryId");
ALTER TABLE "cartItems" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");
ALTER TABLE "cartItems" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");
