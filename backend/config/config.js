require('dotenv').config()

module.exports = {
  "development": {
    "username": 'postgres',
    "password": 'BRown1157',
    "database": 'rest_rant_auth',
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 4000
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
