// Use a Node.js core library
require( 'whatwg-fetch' );


var credentials = {
    "url": "https://gateway-a.watsonplatform.net/calls",
    "apikey": "be7dcd293c53db3ae8b9f44e9ee87efc248bb34a",
};

url = "https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=" + credentials.apikey + "&outputMode=json&start=now-1d&end=now&count=100&q.enriched.url.enrichedTitle.relations.relation=|action.verb.text=acquire,object.entities.entity.type=Company|&return=enriched.url.title";

fetch( url )
    .then( function ( response )
    {
        return response.text()
    } )
    .then( function ( body )
    {
        document.body.innerHTML = body
    } )

// Log the parts object to our browser's console
console.log( "HELLLO" );
