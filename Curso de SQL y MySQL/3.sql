SELECT * 
FROM post 
WHERE fecha_publicacion = (
	SELECT MAX(fecha_publicacion)
    FROM post
)
;
