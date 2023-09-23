const { Model } = require("objection")
const knex = require("../settings/mDb")

Model.knex(knex)

class User extends Model {
    static get tableName() {
        return "person_user"
    }

    static get jsonSchema() {

    }
}

module.exports = User