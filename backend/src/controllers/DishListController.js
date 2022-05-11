const models = require("../models");

class DishListController {
  static browse = (req, res) => {
    models.dishlist
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.dishlist
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readLast = (req, res) => {
    models.dishlist
      .findLast()
      .then(([rows]) => {
        res.send(rows[0]);
      })
      .catch((err) => {
        console.error(err);
        console.error("error");
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const dishlist = req.body;

    // TODO validations (length, format...)

    dishlist.id = parseInt(req.params.id, 10);

    models.dishlist
      .update(dishlist)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const dishlist = req.body;

    // TODO validations (length, format...)

    models.dishlist
      .insert(dishlist)
      .then(([result]) => {
        res.status(201).send({ ...dishlist, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.dishlist
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = DishListController;
