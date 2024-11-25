const mongoose = require("mongoose");

const dataBaseConnection = () => {
  mongoose
    .connect(process.env.DB_CONNECTION_URI)
    .then((status) => console.log(`Connected to database ${status.connection.host}`))
    .catch((err) => console.error(err.message));
};

module.exports = dataBaseConnection;
