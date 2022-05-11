const AbstractManager = require("./AbstractManager");

class DishListManager extends AbstractManager {
  static table = "dishlist";

  insert(dishlist) {
    return this.connection.query(
      `insert into ${DishListManager.table} (userfirstname, userlastname, useremail, userimage, userlat, userlng, userschatid, dishdate, dishname, dishrate, dishimage, dishcomment, dishnumber, dishingredient1, dishingredient2, dishingredient3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        dishlist.userfirstname,
        dishlist.userlastname,
        dishlist.useremail,
        dishlist.userimage,
        dishlist.userlat,
        dishlist.userlng,
        dishlist.userschatid,
        dishlist.dishdate,
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
      `update ${DishListManager.table} set dishimage = ?, dishnumber = ?, dishcomment= ?, dishingredient1= ?, dishingredient2= ?, dishingredient3= ? where id = ?`,
      [
        dishlist.dishimage,
        dishlist.dishnumber,
        dishlist.dishcomment,
        dishlist.dishingredient1,
        dishlist.dishingredient2,
        dishlist.dishingredient3,
        dishlist.id,
      ]
    );
  }
}

module.exports = DishListManager;
