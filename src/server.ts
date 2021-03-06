import ENV from "dotenv";
import express, { application } from "express";
import bodyParser from "body-parser";
import connectDatabse from "./config/db/index";
import domainRouter from "./router/domain-rt";

ENV.config();

const app = express();

app.use(bodyParser.json());
app.use(domainRouter);

app.use("*", (req: express.Request, res: express.Response, next: any) => {
  res.status(404).json({ message: "You shouldn't be here" });
});


// handle errors
app.use(
  (error: any, req: express.Request, res: express.Response, next: Function) => {
    console.log(error.message);
    const status = error.statusCode || 500;
    res.status(status).json({
      title: "Some thing went wrong!",
      message:
        error.message || "There is an error in server! please try again later",
    });
  }
);

connectDatabse()
  .then(() => {
    app.listen(process.env.PORT || 3000, (): void => {
      console.log("Server started after successful db connection!");
    });
  })
  .catch(() => {
    throw new Error("Connection to db faild");
  });
