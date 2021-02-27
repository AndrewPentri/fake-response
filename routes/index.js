const requests = require( './requests' );
const request = require( './request' );

module.exports = app => {
	app.use( '/requests', requests );
	app.use( '/request', request );
};

