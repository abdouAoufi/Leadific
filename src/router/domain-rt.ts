import { Router } from "express";
import {
  createDomain,
  getDomainList,
  updateDomain,
} from "../controller/domain";

const domainRouter = Router();

domainRouter.put("/domain/:domainId", updateDomain);
domainRouter.post("/domain", createDomain);
domainRouter.get("/domain", getDomainList);

export default domainRouter;
