import { Router } from "express";
import {
  createDomain,
  getDomainList,
  updateDomain,
  getDomainByID,
  searchDomain
} from "../controller/domain";

const domainRouter = Router();

domainRouter.put("/domain/:domainId", updateDomain);
domainRouter.post("/domain", createDomain);
domainRouter.get("/domain", getDomainList);
domainRouter.get("/domain/byOwner/:ownerId", getDomainByID);
domainRouter.post("/domain/search/", searchDomain);

export default domainRouter;
