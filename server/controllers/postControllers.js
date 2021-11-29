import mongoose from "mongoose";
import Post from "../model/postModel.js";
import Comment from "../model/commentsModel.js";

export const posts = {
  getPosts: async function (req, res) {
    try {
      const posts = await Post.find().populate("Comment");
      if (posts.length > 0) {
        // how to return only two things
        res.status(200).json({ posts, message: `getting all the posts` });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },
  getPost: async function (req, res) {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return;

      const post = await Post.findById(id).populate("comments");
      return res.status(200).json({ post, message: `getting one post by Id` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  savePosts: async function (req, res) {
    console.log(req.body);
    const newPost = new Post(req.body);

    try {
      await newPost.save();
      res.status(200).json({ newPost, message: `Post saved` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  editPost: async function (req, res) {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return;
      const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
        // ????
        new: true,
      });
      res.status(200).json({ updatedPost, message: `Post updated` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  deletePost: async function (req, res) {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return;
      const deletedPost = await Post.findByIdAndRemove(id);
      res.status(200).json({ deletedPost, message: `post has been deleted` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  addComment: async function (req, res) {
    const { body } = req.body;
    console.log("AliBody", req.body);
    const newComment = new Comment({ body });
    const { postId } = req.params;
    try {
      const comment = await newComment.save();
      // isValid????
      if (!mongoose.Types.ObjectId(postId)) return;
      // ???
      const post = await Post.findById(postId).populate("comments");
      post.comments.unshift(comment);
      await post.save();
      res.status(200).json(post);
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },
};
