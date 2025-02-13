SELECT *
FROM platzi.alumnos
WHERE (EXTRACT(YEAR FROM fecha_incorporacion)) = 2018;

SELECT * 
FROM platzi.alumnos 
WHERE (DATE_PART('YEAR', fecha_incorporacion)) = 2019;

SELECT * 
FROM (
	SELECT *, DATE_PART('YEAR', fecha_incorporacion) AS year_incorporation
	FROM platzi.alumnos
) AS alumnos_con_year
WHERE year_incorporation = 2020;