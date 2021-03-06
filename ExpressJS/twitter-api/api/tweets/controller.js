const MODEL = require('./model');
const { parseError } = require('./../../utils')

module.exports = { getAll, getOne, createOne, updateOne, removeOne }

function getAll(req, res) {
  return MODEL.find().then(data => res.json(data))
    .catch(err => res.status(400).json(parseError(err)))
}

function getOne(req, res) {
  return MODEL.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(parseError(err)))
}

function createOne(req, res) {
  return MODEL.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(parseError(err)))
}

function updateOne(req, res) {
  return MODEL.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(parseError(err)))
}

function removeOne(req, res) {
  return MODEL.findByIdAndRemove(req.params.id).then(data => res.json(data))
    .catch(err => res.status(400).json(parseError(err)))
}
