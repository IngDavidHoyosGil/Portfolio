SELECT * 
FROM generate_series(5,1,-2);

SELECT current_date + s.a AS dates
FROM generate_series(0, 14, 7) AS s(a);

SELECT *
FROM generate_series('2024-09-01 00:00:00'::timestamp,
					'2024-09-04 12:00:00', '10 hours');

SELECT 	a.id,
		a.nombre,
		a.apellido,
		a.carrera_id,
		s.a
FROM platzi.alumnos AS a
	INNER JOIN generate_series(0,10) AS s(a)
	ON s.a = a.carrera_id
ORDER BY a.carrera_id;

SELECT lpad('*', CAST(ordinality AS int), '*')
FROM generate_series(10, 2, -2) WITH ordinality;

SELECT *
FROM generate_series(10, 2, -2) WITH ordinality;