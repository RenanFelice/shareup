const axios = require("axios");

const url = "http://localhost:3001/user/profile/edit";

export const getProfile = async () => { 
  const result = await axios('http://localhost:3001/user/profile/getprofile', {withCredentials: true})
  return result
};


export const updateProfile = async (updatedData) => {
  const result = await axios.patch(url, updatedData, {withCredentials: true});
  return result;
};
