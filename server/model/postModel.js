import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    Title: String,

    message: String,
    tags: [String],
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

export default mongoose.model("Post", postSchema);
