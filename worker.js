const express 			= require('express');
const config 			= require('config');
const WebSocket 		= require('ws');
const bodyParser 		= require('body-parser');
const routing			= require('./src/routing');
const btcPrice 			= require('./src/btcPrice');
const wsControl 		= require('./src/wsControl');

const httpServerPort 	= config.get('httpServerPort');
const wsServerPort 		= config.get('wsServerPort');

console.log('I`m worker!')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(httpServerPort, ()=>{console.log(`http server is running on port: ${httpServerPort}`)});
const wss = new WebSocket.Server({ port: wsServerPort })

wss.on('connection', wsControl.connectionHandler);

app.get('/', routing.index);
app.post('/api', routing.apiPost);
