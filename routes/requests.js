const Router = require( 'express-promise-router' );

const Request = require( '../models/request' );

const router = new Router();

module.exports = router;

router.get( '/', async ( req, res ) => {
	Request.all( ( err, data ) => {
		const response = {
			responseCode: 0,
			data: data || []
		}
		res.send( response );
	});
});

