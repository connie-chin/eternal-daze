-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "users" ("username", "hashedPassword")
    values ('coconutHead', 'rfseirfu');

insert into "categories" ("name")
  values ('shirt'), ('pants'), ('shoes');

insert into "products" ("name", "price", "description", "imageUrl", "categoryId")
values
    ('1950s UCLA Shirt', 60, 'this would be where the measurements info goes.', 'images/IMG_uclaShirtFront.JPG', 1),
    ('1970s Seahorse Shirt', 35, 'this would be where the measurement info goes', 'images/IMG_seahorseShirtFront.JPG', 1),
    ('1970s Star Shirt', 45, 'this would be where the measurement info goes', 'images/IMG_starShirtFront.JPG', 1),
    ('1970s Japanese Tank', 55, 'this would be where the measurement info goes', 'images/IMG_japTank.JPG', 1),
    ('1980s Car Shirt', 65, 'this would be where the measurement info goes', 'images/IMG_carShirtFront.JPG', 1),
    ('1980s Plant Shirt', 45, 'this would be where the measurement info goes', 'images/IMG_purpleShirtFront.JPG', 1),
    ('1990s Polo Shirt', 25, 'this would be where the measurement info goes', 'images/IMG_whitePoloFront.JPG', 1)
;
