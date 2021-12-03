import { Request, Response } from "express";
import { createDomainDB } from "../service/domain";
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

export { createDomain };
