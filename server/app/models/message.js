/**
 * @author Thuan Envity
 */
var messageModel = require('../database').models.message;
var logger = require('../logger');

/**
 * @param data
 * @param callback
 */
var create = function (data) {
	logger.info("Create New Message");
	var newMessage = new messageModel(data);
	newMessage.save()
	return messageModel.populate(newMessage, [{ path: 'user', select: ['username', 'email'] }
		, { path: 'room', select: ['name'] }]);
}
var findById = function (id, callback) {
	messageModel.findById(id, callback);
}

var find = function (data, callback) {
	messageModel.find(data, callback);
}



module.exports = {
	create,
	findById,
	find
}
