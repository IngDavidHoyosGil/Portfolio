SELECT EXTRACT(YEAR FROM fecha_incorporacion) AS year_incorporation
FROM platzi.alumnos;

SELECT DATE_PART('YEAR', fecha_incorporacion) AS year_incorporation
FROM platzi.alumnos;

SELECT DATE_PART('HOUR', fecha_incorporacion) AS hora_incorporacion,
	DATE_PART('MINUTE', fecha_incorporacion) AS minuto_incorporacion,
	DATE_PART ('SECOND', fecha_incorporacion) AS segundo_incorporacion
FROM platzi.alumnos;