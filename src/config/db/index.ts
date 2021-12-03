import { connect } from "mongoose";

const connectDatabse: Function = (): Promise<any> => {
  return connect(process.env.LOCAL_DB_URL!);
};

export default connectDatabse;
