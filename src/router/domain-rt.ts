import { Router } from "express";
import { createDomain } from "../controller/domain";

const domainRouter = Router();

domainRouter.post("/domain", createDomain);

export default domainRouter;
