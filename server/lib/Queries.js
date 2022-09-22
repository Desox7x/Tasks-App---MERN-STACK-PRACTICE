import {pool} from ("../db.js");


module.exports = {
  async getAllUsers() {
    let data = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
    return data;
  },
};

