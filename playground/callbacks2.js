var getUser = (id,callback) => {
  var user = {
    id,
    name: 'Sajal'
  };
  setTimeout(() => {
    callback(user);
  },3000);
};

getUser(71,(userObject) => {
  console.log(userObject);
});
