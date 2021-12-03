import { connect } from "mongoose";

const dbUrl = process.env.LOCAL_DB_URL!;

const connectDatabse: Function = (): Promise<any> => {
  console.log(dbUrl)
  return connect("mongodb://127.0.0.1:27017/Leadific");
};

export default connectDatabse;
