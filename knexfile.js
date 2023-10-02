module.exports = {
	development: {
		client: "mysql2",
		connection: {
			host: process.env.DB_HOST || 'localhost',
			database: process.env.DB_DBNAME || 'it_academy',
			user: process.env.DB_USERNAME || 'root',
			password: process.env.DB_PASSWORD || '',
		},
		pool: {
			min: 0,
			max: 7,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./database/migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},
}