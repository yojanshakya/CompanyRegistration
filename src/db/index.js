const sequelize = require("./connection");

const Company = require("./models/company");

sequelize
  .sync()
  // .sync()
  .then((result) => {
    // return Customer.create({name: "Chandler Bing", email: "cb@gmail.com"})
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });