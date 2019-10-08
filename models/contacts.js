module.exports = function(sequelize, DataTypes) {
  var Contacts = sequelize.define("Contacts", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  });
  return Contacts;
};
