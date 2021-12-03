import { Request, Response } from "express";
import {
  createDomainDB,
  getDomainLisDB,
  updateDomainDB,
} from "../service/domain";
import DomainInt from "../interfaces/domain";

const createDomain = (req: Request, res: Response, next: Function) => {
  const DomainInfo: DomainInt = req.body;
  createDomainDB(DomainInfo).then((domain) => {
    if (!domain) {
      return res.status(422).json({ message: "Error creating domain" });
    }
    res.status(201).json({ message: "Domain created seccessfuly" });
  });
};

const getDomainList = (req: Request, res: Response, next: Function) => {
  getDomainLisDB().then((domains) => {
    if (!domains) {
      return res
        .status(404)
        .json({ message: "Looks we haven't any domain yet" });
    }
    res.status(200).json({ domains });
  });
};

const updateDomain = (req: Request, res: Response, next: Function) => {
  const domainID: string = req.params.domainId!;
  const domainInfo: DomainInt = req.body;
  if (domainID) {
    updateDomainDB(domainID, domainInfo, (domain: any, err: any) => {
      if (!domain) {
        return res
          .status(422)
          .json({ message: "Something wont wront failed to updated domain" });
      }
      return res.status(201).json({ message: "Domain updated successfuly" });
    });
  } else {
    res.status(500).json({ message: "No domain id provided or invalid one!" });
  }
};

export { createDomain, getDomainList, updateDomain };
