const AbstractManager = require("./AbstractManager");

class DishListManager extends AbstractManager {
  static table = "dishlist";

  insert(dishlist) {
    return this.connection.query(
      `insert into ${DishListManager.table} (userfirstname, userlastname, userlemail, userlocation, userschatid, dishname, dishrate, dishimage, dishcomment, dishnumber, dishingredient1, dishingredient2, dishingredient3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        dishlist.userfirstname,
        dishlist.userlastname,
        dishlist.userlemail,
        dishlist.userlocation,
        dishlist.userschatid,
        dishlist.dishname,
        dishlist.dishrate,
        dishlist.dishimage,
        dishlist.dishcomment,
        dishlist.dishnumber,
        dishlist.dishingredient1,
        dishlist.dishingredient2,
        dishlist.dishingredient3,
      ]
    );
  }

  update(dishlist) {
    return this.connection.query(
      `update ${DishListManager.table} set ? where id = ?`,
      [dishlist, dishlist.id]
    );
  }
}

module.exports = DishListManager;
