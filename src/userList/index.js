const users = {};

module.exports = {
	addUser : function(userId, ws) {
		users[userId] = ws;
	},
	removeUser : function(userId) {
		delete users[userId];
	},
	getUser : function(userId) {
		return users[userId];
	},
	getUsersCount : function() {
		return Object.keys(users).length;
	},
	getAllUsers : function() {
		return Object.values(users);
	}
}
