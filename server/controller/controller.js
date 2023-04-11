let Userdb = require("../model/model");

// new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content con not be empty!" });
    return;
  }
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

//return user
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving user information",
      });
    });
};

//update user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update con not be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}.Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}.Maybe id is wrong` });
      } else {
        res.send({ message: "User was deleted succesfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete User with id=${id}`,
      });
    });
};