const userList 	= require('../userList');
const config 	= require('config');

const disconnectInactiveUsersInterval = config.get('disconnectInactiveUsersInterval');

function connectionHandler(ws) {
	ws.on('message', messageHandler);
	ws.on('close',  disonnectInactiveUsers);

	function messageHandler(message) {
		let json = JSON.parse(message);
		ws.userId = json.userId;
		userList.addUser(json.userId, ws);
	}
}

function disonnectInactiveUsers() {
	let users = userList.getAllUsers();
	console.log(users.length)
	users.forEach(removeDisconnectedUser);
}

function removeDisconnectedUser(ws) {
	if (ws.readyState !== 1) userList.removeUser(ws.userId);
}

setInterval(disonnectInactiveUsers, disconnectInactiveUsersInterval);

module.exports.connectionHandler = connectionHandler;
