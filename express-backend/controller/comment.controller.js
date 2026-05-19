const commentModel = require("../model/comment.model")

const getComment = async (req, res) => {
  const comment = await commentModel.find({_id: req.params.id})
  res.json(comment)
};

const addComment = async (req, res) => {
  await commentModel.create({
    snippetId: req.body.snippetId,
    commentText: req.body.commentText
  })
  res.json({message: "comment added"})
};

const deleteComment = async (req, res) => {
  await commentModel.findByIdAndDelete({_id: req.params.id})
  res.json({message: "comment deleted"})
};

module.exports = {
  getComment,
  addComment,
  deleteComment
}