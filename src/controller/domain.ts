import { Request, Response } from "express";
import {
  createDomainDB,
  getDomainLisDB,
  updateDomainDB,
  searchDomainDB,
  getDomainLisByOwnerDB,
} from "../service/domain";
import DomainInt from "../interfaces/domain";
import { wrap } from "async-middleware";

const createDomain = wrap((req: Request, res: Response) => {
  const DomainInfo: DomainInt = req.body;
  const domainName = DomainInfo.domainName;

  searchDomainDB(domainName, (err: any, domain: any) => {
    if (domain) {
      console.log(domain);
      return res.status(500).json({
        message: "Sorry this domain already exist please choose another one",
      });
    }
    createDomainDB(DomainInfo).then((domain) => {
      if (!domain) {
        return res.status(422).json({ message: "Error creating domain" });
      }
      res.status(201).json({ message: "Domain created seccessfuly" });
    });
  });
});

const getDomainList = wrap((req: Request, res: Response) => {
  getDomainLisDB().then((domains) => {
    if (!domains) {
      return res
        .status(404)
        .json({ message: "Looks we haven't any domain yet" });
    }
    res.status(200).json({ domains });
  });
});

const updateDomain = wrap((req: Request, res: Response) => {
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
});

const getDomainByID = wrap((req: Request, res: Response) => {
  const ownerID: string = req.params.ownerId!;
  if (ownerID) {
    getDomainLisByOwnerDB(+ownerID).then((domains) => {
      if (!domains) {
        return res
          .status(404)
          .json({ message: "Looks we haven't any domain yet for this user" });
      }
      res.status(200).json({ domains });
    });
  } else {
    res.status(500).json({ message: "No domain id provided or invalid one!" });
  }
});

const searchDomain = wrap((req: Request, res: Response) => {
  const keyword = req.query?.q;
  console.log(typeof keyword);
  searchDomainDB(keyword, (err: any, domain: any) => {
    if (!domain) {
      return res.status(404).json({
        message: "Sorry this domain wasn't found do you think createa one?",
      });
    }
    res.status(201).json({ domain });
  });
});

export {
  createDomain,
  getDomainList,
  updateDomain,
  getDomainByID,
  searchDomain,
};
