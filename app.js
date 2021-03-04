const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

const port = process.env.PORT || 4321;

const mountRoutes = require( './routes' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.use( express.static( './public/build' ) );

app.listen( port, () => {
	console.log( `Server started on http://localhost:${ port }/` );
});
mountRoutes( app );

