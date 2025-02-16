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
    ('1950s UCLA Shirt', 60, 'this would be where the measurements info goes.', '["images/IMG_uclaShirtFront.JPG", "images/IMG_uclaShirtBack.JPG"]', 1),
    ('1970s Seahorse Shirt', 35, 'this would be where the measurement info goes', '["images/IMG_seahorseShirtFront.JPG", "images/IMG_seahorseShirtBack.JPG"]', 1),
    ('1970s Star Shirt', 45, 'this would be where the measurement info goes', '["images/IMG_starShirtFront.JPG", "images/IMG_starShirtBack.JPG"]', 1),
    ('1970s Japanese Tank', 55, 'this would be where the measurement info goes', '["images/IMG_japTank.JPG", "images/IMG_japTankBack.JPG"]', 1),
    ('1980s Car Shirt', 65, 'this would be where the measurement info goes', '["images/IMG_carShirtFront.JPG", "images/IMG_carShirtBack.JPG"]', 1),
    ('1980s Plant Shirt', 45, 'this would be where the measurement info goes', '["images/IMG_purpleShirtFront.JPG", "images/IMG_purpleShirtBack.JPG"]', 1),
    ('1990s Polo Shirt', 25, 'this would be where the measurement info goes', '["images/IMG_whitePoloFront.JPG", "images/IMG_whitePoloShirtBack.JPG"]', 1),
    ('1980s Makeup Shirt', 45, 'this would be where the measurement info goes', '["images/IMG_makeupShirtFront.JPG", "images/IMG_makeupShirtBack.JPG"]', 1),
    ('1990s Crochet Top', 30, 'this would be where the measurement info goes', '["images/IMG_whiteCrochetShirtBack.JPG", "images/IMG_crochetShirtFront.JPG"]', 1),
    ('1970s Bear Shirt', 65, 'this would be where the measurement info goes', '["images/IMG_bearShirtFront.JPG", "images/IMG_blueShirtBack.JPG"]', 1),
    ('1970s BoyScout Pants', 70, 'this would be where measurement info goes', '["images/IMG_cordPantsFront.JPG", "images/IMG_cordPantsBack.JPG"]', 2),
    ('1970s Flair Jean Pants', 75, 'this would be where the measurement info goes', '["images/IMG_flairJeansFront.JPG", "images/IMG_flairJeansBack.JPG"]', 2),
    ('1960s Levis Jeans', 45, 'this would be where the measurement info goes', '["images/IMG_leviJeansFront.JPG", "images/IMG_leviJeansBack.JPG"]', 2),
    ('1970s Army Pants', 65, 'this would be where the measurement info goes', '["images/IMG_greenPantFront.JPG", "images/IMG_greenPantsBack.JPG"]', 2),
    ('1990s Black Loafers', 95, 'this would be where the measurement info goes', '["images/IMG_blackLoaferStairs.JPG", "images/IMG_blackLoafersSecond.JPG"]', 3),
    ('1970s Cowboy Boots', 115, 'this would be where the measurement info goes', '["images/IMG_cowboyBootStairs.JPG", "images/IMG_cowboyBootsThird.JPG"]', 3)
;

-- insert into "products" ("name", "price", "description", "imageUrl", "categoryId")
-- values
--     ('1950s UCLA Shirt', 60, 'this would be where the measurements info goes.', ARRAY['images/IMG_uclaShirtFront.JPG', 'images/IMG_uclaShirtBack.JPG'], 1),
--     ('1970s Seahorse Shirt', 35, 'this would be where the measurement info goes', ARRAY['images/IMG_seahorseShirtFront.JPG', 'images/IMG_seahorseShirtBack.JPG'], 1),
--     ('1970s Star Shirt', 45, 'this would be where the measurement info goes', ARRAY['images/IMG_starShirtFront.JPG', 'images/IMG_starShirtBack.JPG'], 1),
--     ('1970s Japanese Tank', 55, 'this would be where the measurement info goes', ARRAY['images/IMG_japTank.JPG', 'images/IMG_japTankBack.JPG'], 1),
--     ('1980s Car Shirt', 65, 'this would be where the measurement info goes', ARRAY['images/IMG_carShirtFront.JPG', 'images/IMG_carShirtBack.JPG'], 1),
--     ('1980s Plant Shirt', 45, 'this would be where the measurement info goes', ARRAY['images/IMG_purpleShirtFront.JPG', 'images/IMG_purpleShirtBack.JPG'], 1),
--     ('1990s Polo Shirt', 25, 'this would be where the measurement info goes', ARRAY['images/IMG_whitePoloFront.JPG', 'images/IMG_whitePoloShirtBack.JPG'], 1),
--     ('1980s Makeup Shirt', 45, 'this would be where the measurement info goes', ARRAY['images/IMG_makeupShirtFront.JPG', 'images/IMG_makeupShirtBack.JPG'], 1),
--     ('1990s Crochet Top', 30, 'this would be where the measurement info goes', ARRAY['images/IMG_whiteCrochetShirtBack.JPG', 'images/IMG_crochetShirtFront.JPG'], 1),
--     ('1970s Bear Shirt', 65, 'this would be where the measurement info goes', ARRAY['images/IMG_bearShirtFront.JPG', 'images/IMG_blueShirtBack.JPG'], 1),
--     ('1970s BoyScout Pants', 70, 'this would be where measurement info goes', ARRAY['images/IMG_cordPantsFront.JPG', 'images/IMG_cordPantsBack.JPG'], 2),
--     ('1970s Flair Jean Pants', 75, 'this would be where the measurement info goes', ARRAY['images/IMG_flairJeansFront.JPG', 'images/IMG_flairJeansBack.JPG'], 2),
--     ('1960s Levis Jeans', 45, 'this would be where the measurement info goes', ARRAY['images/IMG_leviJeansFront.JPG', 'images/IMG_leviJeansBack.JPG'], 2),
--     ('1970s Army Pants', 65, 'this would be where the measurement info goes', ARRAY['images/IMG_greenPantFront.JPG', 'images/IMG_greenPantsBack.JPG'], 2),
--     ('1990s Black Loafers', 95, 'this would be where the measurement info goes', ARRAY['images/IMG_blackLoaferStairs.JPG', 'images/IMG_blackLoaferSecond.JPG'], 3),
--     ('1970s Cowboy Boots', 115, 'this would be where the measurement info goes', ARRAY['images/IMG_cowboyBootStairs.JPG', 'images/IMG_cowboyBootsThird.JPG'], 3);
