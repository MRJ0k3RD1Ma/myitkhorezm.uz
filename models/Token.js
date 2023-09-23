const { Model } = require("objection")
const knex = require("../settings/mDb")

Model.knex(knex)

class Token extends Model {
    static get tableName() {
        return "person_user_token"
    }

    static get jsonSchema() {

    }
}

module.exports = Token