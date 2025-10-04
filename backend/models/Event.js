import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  date: { type: String, required: true }, // ISO date string or as given
  location: { type: String, required: true },
  risk: { type: String, enum: ["high", "medium", "low"], default: "low" },
  createdAt: { type: Date, default: Date.now },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
