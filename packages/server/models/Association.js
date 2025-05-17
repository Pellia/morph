import sequelize from "../db/index.js";
import User from "./User.js";

await sequelize.sync();
