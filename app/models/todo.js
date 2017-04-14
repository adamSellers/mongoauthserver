var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({

	title: {
		type: String, 
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);