import { Router } from "express";
import { createDomain, getDomainList } from "../controller/domain";

const domainRouter = Router();

domainRouter.post("/domain", createDomain);
domainRouter.get("/domain", getDomainList);

export default domainRouter;
