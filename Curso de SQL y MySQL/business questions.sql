1. ¿Qué nacionalidades hay?

SELECT nationality 
FROM authors;

SELECT DISTINCT nationality 
FROM authors
ORDER BY nationality;

SELECT DISTINCT nationality 
FROM authors
WHERE nationality IS NOT NULL
ORDER BY nationality;


2. ¿Cuantos escritores hay de cada nacionalidad?

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
GROUP BY nationality;

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
	AND nationality <> 'RUS'
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
	AND nationality NOT IN('RUS')
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
	AND nationality NOT IN('RUS', 'AUT')
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;


3. ¿Cuántos libros hay de cada nacionalidad?

SELECT a.nationality, COUNT(b.book_id) 
FROM authors AS a
RIGHT JOIN books AS b
	ON a.author_id = b.author_id
GROUP BY a.nationality;


4. ¿Cuál es el promedio/desviación estándar del precio de los libros?

SELECT AVG(price) AS prom, STDDEV(price) AS `std`
FROM books;


5. idem, pero por nacionalidad.

SELECT a.nationality, COUNT(b.book_id) AS libros, AVG(b.price) AS prom, STDDEV(b.price) AS `std`
FROM books AS b
JOIN authors AS a
	ON a.author_id = b.author_id
GROUP BY a.nationality
ORDER BY libros DESC;


6. ¿Cuál es el precio máximo/mínimo de un libro?

SELECT MAX(price), MIN(price)
FROM books;

SELECT a.nationality, MAX(b.price), MIN(b.price)
FROM books AS b
JOIN authors AS a
	ON b.author_id = a.author_id
GROUP BY a.nationality;	


7. ¿Cómo quedaría el reporte de prestamos?

SELECT c.name, t.type,  b.title,
	CONCAT(a.name, " (", a.nationality, ")") AS autor,
	TO_DAYS(NOW()) - TO_DAYS(t.created_at) AS ago
FROM transactions AS t
LEFT JOIN clients AS c
	ON c.client_id = t.client_id
LEFT JOIN books AS b
	ON b.book_id = t.book_id
LEFT JOIN authors AS a
	ON b.author_id = a.author_id;
	