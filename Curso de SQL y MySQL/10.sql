SELECT *
FROM usuarios
	LEFT JOIN post ON usuarios.id = post.usuario_id
WHERE post.usuario_id IS NULL    
UNION
SELECT *
FROM usuarios
	RIGHT JOIN post ON usuarios.id = post.usuario_id
WHERE post.usuario_id IS NULL;    