SELECT *
FROM platzi.alumnos
WHERE id NOT IN(
	SELECT id
	FROM platzi.alumnos
	WHERE tutor_id = 30
);