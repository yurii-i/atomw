const cluster 			= require('cluster');
const config 			= require('config');
const workersCount 		= config.get('workersCount');

if (cluster.isMaster) {
	for (let i=0; i<workersCount; i++) cluster.fork();
	console.log('I`m master!')
} else {
	require('./worker.js');
}
