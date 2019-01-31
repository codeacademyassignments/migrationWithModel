

module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  // Person.associate = function (models) {
  //   // associations can be defined here
  // };

  Person.generate = (fName, lName, emailId) => Person.create({ firstName: fName, lastName: lName, email: emailId });
  return Person;
};
