const User = require('../models/User');
exports.getAll = async (req, res) => {
	try {
		const models = await User.query().orderBy("id", "desc");
		return res.status(200).json({ success: true, data: models });
	} catch (error) {
		console.log(error);
	}
};