const path 		= require('path');
const userList	= require('../userList');
const btcPrice 	= require('../btcPrice');

module.exports = {
	index : function (req, res) {
		// Отдаю страницу, просто файлом, что бы не подключать шаблонизаторы или шарить папку public. 
		res.sendFile(path.resolve(__dirname, '../../index.html'));
	},
	apiPost : function (req, res) {
		res.status(200).end('success');
		let {userId} = req.body;
		let ws = userList.getUser(userId);
		if (userId && ws) ws.send(btcPrice.getPrice())
	}
}
