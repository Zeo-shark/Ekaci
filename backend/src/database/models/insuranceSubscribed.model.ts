import { Document, model, ObjectId, Schema } from "mongoose";
import { cropDetails } from "./farmer.model";

export interface InsuranceSubscriptionInterface extends Document {
  _id: ObjectId;
  insurance_id: ObjectId;
  farmer_id: string;
  payments_done: string;
  total_payments: string;
  created_on: string;
  updated_on: string;
}

const InsuranceSubscription = new Schema<InsuranceSubscriptionInterface>({
  farmer_id: {
    type: String,
    required: true,
  },
  insurance_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  payments_done: {
    type: String,
    required: true,
  },
  total_payments: {
    type: String,
    required: true,
  },
  created_on: {
    type: String,
    default: new Date().toDateString(),
  },
  updated_on: {
    type: String,
    default: new Date().toDateString(),
  },
});

export default model("insuranceSubscription", InsuranceSubscription);
