var getUser = (id,callback) => {
  let user = {
    name : 'Sajal',
    id: id
  };
  setTimeout(() => {callback(user);}, 3000);
};

getUser(71,(user) => {
  console.log(user);
});
