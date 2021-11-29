import mongoose from "mongoose";
const { Schema } = mongoose;

const pubSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    message: String,
    selectedField: String,
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Pub", pubSchema);
