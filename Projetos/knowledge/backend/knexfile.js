// sudo docker run --name knowledge_postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres

const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
