
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    firstName: DataTypes.STRING,
    fmno: DataTypes.INTEGER,
    lastName: DataTypes.STRING,
  }, {});
  // user.allEntries = () => user.findAll();
  user.generate = (fName, id, lName) => user.create({ firstName: fName, fmno: id, lastName: lName });
  // user.delete = id => user.destroy({
  //   where: {
  //     fmno: id,
  //   },
  // });
  return user;
};
