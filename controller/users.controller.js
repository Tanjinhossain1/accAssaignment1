const allUsers = require("../usersData.json");

// there give the random user from userData.json
module.exports.randomUser = (req, res) => {
  const randomId = Math.floor(Math.random() * allUsers.length) + 1;
  const randomUser = allUsers.find((user) => user.id == randomId);
  res.send(randomUser);
};

// here you can get all user also you should set the limit user
module.exports.getAllUser = (req, res) => {
  const query = Number(req.query.limit);
  if (query) {
    res.send(allUsers.slice(0, query));
  } else {
    res.send(allUsers);
  }
};

// add the user detail
module.exports.addNewUser = (req, res) => {
  const { id, gender, name, contact, address, photoUrl } = req.body;
  const userDetail = req.body;
  const filter = allUsers.find((user) => user.id == id);
  if (!filter) {
    if (id && gender && name && contact && address && photoUrl) {
      allUsers.push(userDetail);
      res.send({ message: "pushed user" });
    } else {
      res.send({ message: "Please give Valid Value" });
    }
  } else {
    res.send({ message: "This user already have" });
  }
};

// update the user Detail
module.exports.updateUserDetail = (req, res) => {
  const id = Math.floor(Math.random() * allUsers.length) + 1;
  const newUserDetail = req.body;
  const filter = allUsers.find((user) => user.id === Number(id));
  filter.name = newUserDetail.id || filter.id;
  filter.gender = newUserDetail.gender || filter.gender;
  filter.name = newUserDetail.name || filter.name;
  filter.contact = newUserDetail.contact || filter.contact;
  filter.address = newUserDetail.address || filter.address;
  filter.photoUrl = newUserDetail.photoUrl || filter.photoUrl;
  res.send(filter);
};


// user bulk update 
module.exports.userBulkUpdate = (req, res) => {
    const { id } = req.params;
    const newUserDetail = req.body;
    const filter = allUsers.find(user => user.id === Number(id));
    filter.name=newUserDetail.id || filter.id;
    filter.gender=newUserDetail.gender || filter.gender;
    filter.name=newUserDetail.name || filter.name;
    filter.contact=newUserDetail.contact || filter.contact;
    filter.address=newUserDetail.address || filter.address;
    filter.photoUrl=newUserDetail.photoUrl || filter.photoUrl;
    res.send(filter)

}

// user Delete 
module.exports.userDelete = (req, res) => {
    const totalUser = allUsers.length + 1;
    const { id } = req.params;
    if(totalUser == id){
        if (Number(id)) {
            result = user.filter(use => use.id !== Number(id));
            res.send(result);
        }else{
            res.send({ message: "not number" })
        }
    }else{
        res.send({message: "your id is invalid"})
    }
   
}