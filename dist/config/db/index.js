"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbUrl = process.env.LOCAL_DB_URL || "mongodb://127.0.0.1:27017/Leadific";
const connectDatabse = () => {
    return (0, mongoose_1.connect)(dbUrl);
};
exports.default = connectDatabse;
