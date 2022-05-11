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
      `update ${DishListManager.table} set dishname = ?, dishimage = ?, dishnumber = ?, dishcomment= ?, dishingredient1= ?, dishingredient2= ?, dishingredient3= ?, userschatid= ? where id = ?`,
      [
        dishlist.dishname,
        dishlist.dishimage,
        dishlist.dishnumber,
        dishlist.dishcomment,
        dishlist.dishingredient1,
        dishlist.dishingredient2,
        dishlist.dishingredient3,
        dishlist.userschatid,
        dishlist.id,
      ]
    );
  }
}

module.exports = DishListManager;
