SELECT name, email, YEAR(NOW()) - YEAR(birthdate) AS edad, gender 
FROM clients 
WHERE gender = 'F'
	AND name LIKE '%Lop%';




SELECT b.book_id, a.name, a.author_id, b.title
FROM books AS b
JOIN authors AS a
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5;


SELECT c.name, b.title, a.name, t.type
FROM transactions AS t 
JOIN books AS b
	ON t.book_id = b.book_id
JOIN clients AS c
	ON t.client_id	= c.client_id
JOIN authors AS a
	ON b.author_id = a.author_id
WHERE c.gender = 'F'
	AND t.type = 'sell';
	
	
SELECT c.name, b.title, a.name, t.type
FROM transactions AS t 
JOIN books AS b
	ON t.book_id = b.book_id
JOIN clients AS c
	ON t.client_id	= c.client_id
JOIN authors AS a
	ON b.author_id = a.author_id
WHERE c.gender = 'M'
	AND t.type IN ('sell', 'lend');
	
	
SELECT b.title, a.name
FROM authors AS a, books as b
WHERE a.author_id = b.author_id
LIMIT 10;


SELECT b.title, a.name 
FROM books AS b
INNER JOIN authors as a
	ON a.author_id = b.author_id
LIMIT 10;


SELECT a.author_id, a.name, a.nationality, b.title
FROM authors AS a
JOIN books as b
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
ORDER BY a.name DESC;	


SELECT a.author_id, a.name, a.nationality, b.title
FROM authors AS a
LEFT JOIN books as b
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
ORDER BY a.name DESC;	


SELECT a.author_id, a.name, a.nationality, b.title
FROM authors AS a
LEFT JOIN books as b
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
ORDER BY a.author_id;


SELECT a.author_id, a.name, a.nationality, COUNT(b.book_id)
FROM authors AS a
LEFT JOIN books as b
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
GROUP BY a.author_id
ORDER BY a.author_id;


SELECT a.author_id, a.name, a.nationality, COUNT(b.book_id)
FROM authors AS a
JOIN books as b
	ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
GROUP BY a.author_id
ORDER BY a.author_id;