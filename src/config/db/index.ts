import { connect } from "mongoose";

const dbUrl = process.env.LOCAL_DB_URL! || "mongodb://127.0.0.1:27017/Leadific";

const connectDatabse: Function = (): Promise<any> => {
  return connect(dbUrl);
};

export default connectDatabse;
