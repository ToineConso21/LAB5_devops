const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname : user.firstname,
      lastname: user.lastname 
    }   

    // Save to DB
    // TODO check if user already exists
    client.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },
   get: (username, callback) => {

    if(username.username)
      return callback (new Error ("user already exist"),null)

      const userObj = {
        username: username.username
      }
      client.hmset(username.username, userObj, (err, res) => {
        if (err) return callback(err, null)
        callback(null, res) // Return callback
      })
  //   // TODO create this method
   }
}
