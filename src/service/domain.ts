import Domain from "../model/domain";
import DomainInt from "../interfaces/domain";

const createDomainDB = (domainInfo: DomainInt): Promise<any> => {
  const domain = new Domain(domainInfo);
  return domain.save();
};

const checkExistenceByNameDB = (ownerName: string) => {
  return Domain.findOne({ ownerName });
};

const checkExistenceByIdDB = (productID: string) => {
  return Domain.findById(productID);
};

const getDomainLisDB = (): Promise<any> => {
  return Domain.find({}).exec();
};

const getDomainLisByOwnerDB = (ownerID: number) => {
  return Domain.find({ ownerID: ownerID });
};

const updateDomainDB = (
  domainID: string,
  updatedDomain: DomainInt,
  cb: Function
) => {
  Domain.findByIdAndUpdate(domainID, updatedDomain, (err: any, doc: any) => {
    cb(doc, err);
  });
};

const deleteDomainDB = (domainID: string) => {
  return Domain.findByIdAndDelete(domainID);
};

export {
  createDomainDB,
  checkExistenceByNameDB,
  updateDomainDB,
  checkExistenceByIdDB,
  deleteDomainDB,
  getDomainLisDB,
  getDomainLisByOwnerDB,
};
