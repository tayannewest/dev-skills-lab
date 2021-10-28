import * as skillDb from '../data/skill-db.js'

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time,
    })
  })
}

function show(req, res) {
  console.log(req.time)
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error,
    })
  })
}

export {
  index,
  show
}