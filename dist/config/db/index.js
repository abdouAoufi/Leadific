"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDatabse = () => {
    return (0, mongoose_1.connect)(process.env.LOCAL_DB_URL);
};
exports.default = connectDatabse;
