SELECT *
FROM platzi.alumnos
WHERE tutor_id IN(1,2,3,4);

SELECT *
FROM platzi.alumnos
WHERE tutor_id >=1 AND tutor_id <= 10;

SELECT * 
FROM platzi.alumnos
WHERE tutor_id BETWEEN 1 AND 10;

SELECT int4range (1, 20) @>3;

SELECT 3 <@ int4range (1, 20);

SELECT numrange(11.1, 22.2) && numrange(20.0, 30.0)

SELECT UPPER(int8range(15,25));

SELECT LOWER(int8range(15,25));

SELECT int4range(10, 20) * int4range(15, 25);

SELECT ISEMPTY(numrange(1, 5));

SELECT *
FROM platzi.alumnos
WHERE int4range(10, 20) @> tutor_id;
