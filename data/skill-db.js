const skills = [
  {text: 'Javascript', has: true, _id: 1},
  {text: 'CSS', has: true, _id: 2},
  {text: 'HTML', has: true, _id: 3},
  {text: 'MAD UPS', has: false, _id: 4},
  {text: 'EXPRESS', has: true, _id: 5},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }

    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}