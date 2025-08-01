SELECT u.nickname, COUNT(*) AS cant_posts, GROUP_CONCAT(nombre_categoria)
FROM usuarios AS u
	INNER JOIN post AS p ON u.id = p.usuario_id
    INNER JOIN categorias AS c ON c.id = p.categoria_id
GROUP BY u.id
ORDER BY cant_posts DESC
;    

SELECT * 
FROM usuarios AS u
	LEFT JOIN post ON u.id = post.usuario_id
WHERE post.usuario_id IS NULL    
;