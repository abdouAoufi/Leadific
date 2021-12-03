"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Types = mongoose_1.Schema.Types;
const schema = new mongoose_1.Schema({
    domainName: {
        type: Types.String,
        required: true,
        default: "www.example.com",
    },
    ownerName: {
        type: Types.String,
        required: true,
    },
    ownerID: {
        type: Types.Number,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Domain", schema);
