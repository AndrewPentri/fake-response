const Router = require( 'express-promise-router' );

const Request = require( '../models/request' );

const router = new Router();
const { isObjectEmpty } = require( '../common' );

module.exports = router;

router.post( '/', async ( req, res ) => {
	if( !req || !req.params || isObjectEmpty( req.params ) ) {
		res.send( { "responseCode": -1 }  );
		return false;
	}
	console.log( req.params );
	Request.add( req.params, ( data ) => {
		const response = {
			responseCode: 0,
			data: data || []
		}
		res.send( response );
	});
})

router.get( '/:id', async ( req, res ) => {
	if( !req || !req.params || isObjectEmpty( req.params ) ) {
		res.send( { "responseCode": -1 }  );
		return false;
	}
	Request.get( req.params.id, ( data ) => {
		const response = {
			responseCode: 0,
			data: data || []
		}

		res.send( response );
	});
})

