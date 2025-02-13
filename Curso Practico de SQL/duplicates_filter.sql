SELECT * 
FROM platzi.alumnos AS out_
WHERE (
	SELECT COUNT(*)
	FROM platzi.alumnos AS inner_
	WHERE out_.id = inner_.id
) > 1;

SELECT (platzi.alumnos.*)::text, COUNT(*)
FROM platzi.alumnos
GROUP BY platzi.alumnos.*
HAVING COUNT(*) > 1

SELECT (platzi.alumnos.nombre,
		platzi.alumnos.apellido,
		platzi.alumnos.email,
		platzi.alumnos.colegiatura,
		platzi.alumnos.fecha_incorporacion,
		platzi.alumnos.carrera_id,
		platzi.alumnos.tutor_id
	   )::text, COUNT(*)
FROM platzi.alumnos
GROUP BY platzi.alumnos.nombre,
		platzi.alumnos.apellido,
		platzi.alumnos.email,
		platzi.alumnos.colegiatura,
		platzi.alumnos.fecha_incorporacion,
		platzi.alumnos.carrera_id,
		platzi.alumnos.tutor_id
HAVING COUNT(*) > 1

SELECT * 
FROM (
	SELECT id,
	ROW_NUMBER() OVER(
		PARTITION BY
			nombre, apellido, email, colegiatura, fecha_incorporacion, carrera_id, tutor_id		
		ORDER BY id ASC
	) AS row_,
	*
	FROM platzi.alumnos
) AS duplicados
WHERE duplicados.row_ > 1;

DELETE FROM platzi.alumnos
WHERE id IN (
    SELECT id FROM (
        SELECT id, 
        ROW_NUMBER() OVER(
            PARTITION BY
                nombre, apellido, email, colegiatura, fecha_incorporacion, carrera_id, tutor_id
            ORDER BY id ASC
        ) AS row_
        FROM platzi.alumnos
    ) AS duplicados
    WHERE row_ > 1
);
