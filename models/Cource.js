const { Model } = require("objection")
const knex = require("../settings/mDb")

Model.knex(knex)

class Cource extends Model {
	static get tableName() {
		return "cource"
	}

	static get jsonSchema() {

	}
}

module.exports = Cource