"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbUrl = process.env.LOCAL_DB_URL;
const connectDatabse = () => {
    console.log(dbUrl);
    return (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/Leadific");
};
exports.default = connectDatabse;
