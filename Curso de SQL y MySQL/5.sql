SELECT monthname(fecha_publicacion) AS post_month, estatus, COUNT(*) AS post_quantity
FROM post
GROUP BY estatus, post_month
HAVING post_quantity > 2
ORDER BY post_month
;
