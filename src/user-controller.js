const users = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "BigMack" },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(
      users.find((user) => user.id === parseFloat(req.params.id))
    );
  }
  res.send(users);
};

const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(users);
};

export default {
  getUsers,
  createUser,
};
