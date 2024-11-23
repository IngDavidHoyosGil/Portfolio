DELETE FROM authors WHERE author_id = 142 LIMIT 1;


UPDATE tabla
SET 
	[columna = valor, ...]
WHERE
	[condiciones]
LIMIT 1;	


UPDATE clients
SET active = 0
WHERE client_id = 100
LIMIT 1;

UPDATE clients
SET email = 'javier@gmail.com'
WHERE client_id = 7
LIMIT 1;


SELECT client_id, name, active
FROM clients
WHERE
	client_id IN (1,6,8,27,90)
	OR name lIKE '%Lopez%';
	
	
UPDATE clients
SET active = 0
WHERE
	client_id IN (1,6,8,27,90)
	OR name lIKE '%Lopez%';