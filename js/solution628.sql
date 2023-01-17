-- Hello SQL!

-- Return a table with a single column named Greeting with the phrase 'hello world!'

-- Please use Data Manipulation Language and not Data Definition Language to solve this Kata

-- write your select statement to return hello world
CREATE TABLE hello ("Greeting" text);

INSERT INTO hello VALUES ('hello world!');
SELECT * FROM hello;