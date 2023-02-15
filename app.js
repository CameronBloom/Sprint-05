const { default: axios } = require("axios"); 

const getUsers = () => {
  axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((response) => {
      const users = response.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};
getUsers();