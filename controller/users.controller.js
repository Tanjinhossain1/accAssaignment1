const allUsers = require("../usersData.json");

// there give the random user from userData.json 
module.exports.randomUser = (req, res) => {
  const randomId = Math.floor(Math.random() * 10) + 1;
  const randomUser = allUsers.find((user) => user.id == randomId);
  res.send(randomUser)
};

// here you can get all user also you should set the limit user 
module.exports.getAllUser = (req, res) => {
    const query = Number(req.query.limit);
    if (query) {
        res.send(allUsers.slice(0, query))
    } else {
        res.send(allUsers)
    }
}

