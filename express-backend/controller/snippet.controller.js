const snippetModel = require("../model/snippet.model")

const getSnippet = async (req, res) => {
  const snippet = await snippetModel.find({_id: req.params.id})
  res.json(snippet)
};

const addSnippet = async (req, res) => {
  await snippetModel.create({
    header: req.body.header,
    description: req.body.description,
    language: req.body.language,
    code: req.body.code
  })
  res.json({message: "Snippet added"})
};

const deleteSnippet = async (req, res) => {
  await snippetModel.findByIdAndDelete({_id: req.params.id})
  res.json({message: "Snippet deleted"})
};

module.exports = {
  getSnippet,
  addSnippet,
  deleteSnippet
}