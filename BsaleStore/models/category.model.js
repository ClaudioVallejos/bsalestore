const connection = require("../config/conection");

function getCategory() {
  if (connection) {
    let sql = "select * from category";
    connection.query(sql, (error, res) => {
      if (error) throw error;
      callback(res);
    });
  }
}

module.exports = {
    getCategory
};
