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

const getDomainLisByOwnerDB = (ownerID: number): Promise<any> => {
  return Domain.find({ ownerID: ownerID }).exec();
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

const searchDomainDB = (keyword: any, cb: Function) => {
  return Domain.find({ domainName: keyword })
    .exec(function (err: any, docs: any) {
      cb(err, docs);
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
  searchDomainDB,
};
