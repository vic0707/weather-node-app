const https = require('https');
const api = require('./api.json');

// Print out temp details
function printTemp(weather) {
    const message = `Current temperature in ${weather.current_observation.display_location.city} is ${weather.current_observation.temp_c}C`;
    console.log(message);
}
// Print out error message

function get(query) {
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
        let body = "";
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            // console.log(JSON.parse(body));
            printTemp(JSON.parse(body));
            //Parse data
            //Print the data
        });
    });
}

module.exports.get = get;

//TODO: Handle any errors