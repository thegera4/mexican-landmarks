const { Landmark } = require("../db");

const getLandmarks = async () => {
  try{
  const landmarks = await Landmark.findAll();
  return landmarks;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getLandmarks,
};