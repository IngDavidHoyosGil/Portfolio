SELECT post.titulo, group_concat(nombre_etiqueta)
FROM post 
	INNER JOIN post_etiquetas ON post.id = post_etiquetas.post_id
    INNER JOIN etiquetas ON etiquetas.id = post_etiquetas.etiqueta_id
 GROUP BY post.id    
;

SELECT * 
FROM etiquetas LEFT JOIN post_etiquetas ON etiquetas.id = post_etiquetas.etiqueta_id
WHERE post_etiquetas.etiqueta_id IS NULL;