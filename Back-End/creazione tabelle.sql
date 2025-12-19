CREATE TABLE storia(
	Id SERIAL PRIMARY KEY,
	number_group INTEGER,
	categoria VARCHAR(50),
	titolo VARCHAR(50),
	intro VARCHAR(50),
	testo VARCHAR,
	link_ VARCHAR,
	image VARCHAR
)

//per vedere eventuali limiti di lunghezza delle variabili fare:
SELECT column_name, data_type, character_maximum_length
FROM information_schema.columns
WHERE table_name = 'storia';

//ricordare che la variabile VARCHAR anche senza specificare il limite, il suo limite e sempre di 255
//se voglio avere dei campi in cui non voglio impostare un limite utilizzare la variabile TEXT per le string

//per modificare la tabella usare sempre prima TYPE e poi dire il tipo della variabile:
ALTER TABLE storia
ALTER COLUMN number_group TYPE INTEGER,
ALTER COLUMN categoria TYPE VARCHAR(20),
ALTER COLUMN titolo TYPE VARCHAR(50),
ALTER COLUMN image TYPE TEXT,
ALTER COLUMN link_ TYPE TEXT;

ALTER TABLE storia DROP COLUMN intro;
ALTER TABLE storia DROP COLUMN testo;