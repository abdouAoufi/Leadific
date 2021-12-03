"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./config/db/index"));
const domain_rt_1 = __importDefault(require("./router/domain-rt"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(domain_rt_1.default);
// handle errors
app.use((error, req, res, next) => {
    console.log(error.message);
    const status = error.statusCode || 500;
    res.status(status).json({
        title: "Some thing went wrong!",
        message: error.message || "There is an error in server! please try again later",
    });
});
(0, index_1.default)()
    .then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server started after successful db connection!");
    });
})
    .catch(() => {
    throw new Error("Connection to db faild");
});
