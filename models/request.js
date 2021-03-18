/**
 * Module exports request model that interacts with DB.
 * */

const db = require( '../db' );

class Request {

	static all( cb ) {
		db.all( 'select * from request_info', cb );
	}

	static get( id, cb ) {
		db.get( 'select * from request_info where id = ?', id, cb );
	}

	static add( data, cb ) {
		const { uri, method, body } = data;
		console.log( uri, method, body )
		db.run( 'insert into request_info(uri, method, body) values(?, ?, ?)', uri, method, body, cb );
	}

	static remove( id, cb ) {
		db.run( 'delete from request_info where id = ?', id, cb );
	}
}

module.exports = Request;

