module.exports = {
	transports: {
		console: {
			json: false,
			timestamp: true
		},
		file: {
			filename: __dirname + '/../../logs/common/development.log',
			json: false
		}
	},
	exceptionHandlers: {
		console: {
			json: false,
			timestamp: true
		},
		file: {
			filename: __dirname + '/../../logs/common/error.log',
			json: false
		}
	},
	exitOnError: false
};