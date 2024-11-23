select count(book_id),
	sum(if(year < 1950, 1, 0)) as '<1950',
	sum(if(year < 1950, 0, 1)) as '>1950'	
from books;


select count(book_id),
	sum(if(year < 1950, 1, 0)) as '<1950',
	sum(if(year >= 1950 and year < 1990, 1, 0)) as '<1990',
	sum(if(year >= 1990 and year < 2000, 1, 0)) as '<2000',
	sum(if(year > 2000, 1, 0)) '>=2000'
from books;


select nationality, count(book_id),
	sum(if(year < 1950, 1, 0)) as '<1950',
	sum(if(year >= 1950 and year < 1990, 1, 0)) as '<1990',
	sum(if(year >= 1990 and year < 2000, 1, 0)) as '<2000',
	sum(if(year > 2000, 1, 0)) '>=2000'
from books as b
join authors as a
	on b.author_id = a.author_id
where
	a.nationality is not null
group by nationality;	