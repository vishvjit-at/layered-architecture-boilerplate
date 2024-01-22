import { sequelize } from "./sequalizerConnection";
import { Model, DataTypes } from "sequelize";

export class userSequelize extends Model {}

userSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "userAdmin", sequelize, timestamps: false }
);
