const Cource = require('../models/cource');
exports.getAll = async (req, res) => {
	try {
		const models = await Cource.query().orderBy("id", "desc");
		return res.status(200).json({ success: true, data: models });
	} catch (error) {
		console.log(error);
	}
};