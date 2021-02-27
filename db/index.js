const sqlite3 = require( 'sqlite3' ).verbose();
const dbName = 'fake-response.sqlite';
const db = new sqlite3.Database( dbName );

db.serialize( () => {
	const sql = `create table if not exists request_info
				 (
				 	id integer primary key autoincrement,
					uri text,
					method text,
					body text
				 )`
	db.run( sql );
});

module.exports = db;

