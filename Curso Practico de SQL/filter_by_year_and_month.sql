SELECT * 
FROM (
	SELECT *, 
		DATE_PART('YEAR', fecha_incorporacion) AS year_incorporation,
		DATE_PART('MONTH', fecha_incorporacion) AS mes_incorporacion
	FROM platzi.alumnos
) AS alumnos_con_year
WHERE year_incorporation = 2020 AND mes_incorporacion = 05;