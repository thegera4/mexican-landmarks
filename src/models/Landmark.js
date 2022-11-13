const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('landmark', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING(1234),
      allowNull: true,
      defaultValue: null
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: true,
      defaultValue: null
    },
  });
};
