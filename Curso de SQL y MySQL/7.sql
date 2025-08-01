SELECT estatus, MONTHNAME(fecha_publicacion) AS post_month, COUNT(*) AS post_quantity
FROM post
GROUP BY estatus, post_month;
