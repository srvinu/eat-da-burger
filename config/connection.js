mysql = require('mysql')
var connection = mysql.createConnection({
  host: "arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "dqcbeoqvd1jnp1x7",
  password: "tbz9ctyi0sqj3w3a",
  database: "oqii2q7w3mel5lov"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
