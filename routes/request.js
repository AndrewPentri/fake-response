const Router = require( 'express-promise-router' );

const Request = require( '../models/request' );
const { app } = require( 'express' );
const router = new Router();
const { isObjectEmpty } = require( '../common' );

module.exports = router;

router.post( '/', async ( req, res ) => {
	if( !req || !req.body || !req.body.params || isObjectEmpty( req.body.params ) ) {
		res.send( { "responseCode": -1 }  );
		return false;
	}

	Request.add( req.body.params, ( err, data ) => {
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
	Request.get( req.params.id, ( err, data ) => {
		const response = {
			responseCode: 0,
			data: data || []
		}

		res.send( response );
	});
})

router.delete( '/:id', async ( req, res ) => {
	if( !req || !req.params || isObjectEmpty( req.params ) ) {
		res.send( { "responseCode": -1 }  );
		return false;
	}

	Request.remove( req.params.id, ( err, data ) => {
		const response = {
			responseCode: 0,
			data: data || []
		}

		res.send( response );
	});
})

