DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;
USE DATABASE recipes_db;

create table recipes(
id INTEGER (11) AUTO_INCREMENT NOT NULL,
date_submitted DATE NOT NULL,
mealtime VARCHAR(50),
dishname VARCHAR(50) NOT NULL,
submitter VARCHAR (50) NOT NULL,
ingredients VARCHAR (5000) NOT NULL,
instructions VARCHAR (5000) NOT NULL,
PRIMARY KEY (id)

)


--EXAMPLE--

INSERT into recipes (date_submitted,
mealtime,
dishname,
submitter,
ingredients,
instructions) 
VALUES ('2020-05-30',
'Breakfast',
'Early Morning Oven Roasted New Potatoes',
'www.allrecipes.com',
'1 ½ pounds new potatoes, cut into wedges, 4 tablespoons butter, 2 teaspoons fresh rosemary, salt and pepper to taste',
'Step 1) Preheat oven to 450 degrees F (230 degrees C). 
Step 2) In a hot skillet, melt the butter. Stir in rosemary, salt and pepper. Coat potatoes evenly with the melted butter. Arrange the potatoes in a single layer on a baking pan. 
Step 3) Bake in a preheated oven until potatoes are golden brown, approximately 20 to 25 minutes. Toss them occasionally to ensure that they brown on all sides.') 