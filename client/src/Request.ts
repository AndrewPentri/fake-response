const axios = require( 'axios' );

type axiosCfg = {
    method: string,
    url: string,
    body?: string
}

const Request: Function = async ( config: axiosCfg ) => {
    try {
        return await axios[ config.method ]( config.url, config.body ? config.body : null );
    } catch ( e ) {
        console.log( 'An [request] error occurred, log: ', e );
    }
}

export default Request;
