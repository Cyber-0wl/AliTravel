import mongoose from "mongoose";
import Pub from "../model/pubModel.js";

export const pubs = {
  getPubs: async function (req, res) {
    try {
      // this line (means return only comment with populate)
      const pubs = await Pub.find().populate("Comment");
      if (pubs.length > 0) {
        res.status(200).json({ pubs, message: `getting all the pubs` });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },
  getPub: async function (req, res) {
    // req.params ? in the path?
    const { id } = req.params;
    try {
      // this line below
      if (!mongoose.Types.ObjectId.isValid(id)) return;

      const pub = await Pub.findById(id).populate("comments");
      return res.status(200).json({ pub, message: `getting one pub by Id` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },
  savePub: async function (req, res) {
    console.log(req.body);
    // Pub(req.body) means
    const newPub = new Pub(req.body);
    console.log(newPub);
    try {
      await newPub.save();
      res.status(200).json({ newPub, message: `Pub is saved` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  editPub: async function (req, res) {
    const { id } = req.params;
    try {
      // this line ?
      if (!mongoose.Types.ObjectId.isValid(id)) return;
      const updatedPub = await Pub.findByIdAndUpdate(id, req.body, {
        // ????
        new: true,
      });
      res.status(200).json({ updatedPub, message: `Pub updated` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },

  deletePub: async function (req, res) {
    const { id } = req.params;
    try {
      // ???
      if (!mongoose.Types.ObjectId.isValid(id)) return;
      const deletedPub = await Post.findByIdAndRemove(id);
      res.status(200).json({ deletedPub, message: `pub has been deleted` });
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },
};
