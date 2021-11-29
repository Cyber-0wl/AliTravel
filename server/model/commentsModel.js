import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentModel = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// const Comment = mongoose.model("Comment", CommentModel);
// export default Comment;
export default mongoose.model("Comment", CommentModel);
