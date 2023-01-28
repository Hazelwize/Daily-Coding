-- Given a demographics table in the following format:

-- ** demographics table schema **

--     id
--     name
--     birthday
--     race

-- you need to return a table that shows a count of each race represented, ordered by the count in descending order as:

-- ** output table schema **

--     race
--     count


/*  SQL  */
SELECT race, COUNT(race)
FROM demographics
GROUP BY race
ORDER BY count desc;
