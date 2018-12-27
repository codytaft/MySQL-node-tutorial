module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'tutorial_node_database'
  }
};
