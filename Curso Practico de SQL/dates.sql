SELECT EXTRACT(YEAR FROM fecha_incorporacion) AS year_incorporation
FROM platzi.alumnos;

SELECT DATE_PART('YEAR', fecha_incorporacion) AS year_incorporation
FROM platzi.alumnos;

SELECT DATE_PART('YEAR', fecha_incorporacion) AS year_incorporation,
	DATE_PART('MONTH', fecha_incorporacion) AS mes_incorporacion,
	DATE_PART ('DAY', fecha_incorporacion) AS dia_incorporacion
FROM platzi.alumnos;