import { Schema, model } from "mongoose";
import Domain from "../interfaces/domain";

const Types = Schema.Types;

const schema = new Schema<Domain>({
  domainName: {
    type: Types.String,
    required: true,
    default: "www.example.com",
  },
  ownerName: {
    type: Types.String,
    required: true,
  },
  ownerID: {
    type: Types.Number,
    required: true,
  },
});

export default model<Domain>("Domain", schema);
