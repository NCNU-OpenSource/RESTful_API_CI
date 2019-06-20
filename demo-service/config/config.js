module.exports = {
	port: process.env.PORT || 8123,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'LSA',
    user: 'demo',
    password: '123',
    port: 3306
  }
};