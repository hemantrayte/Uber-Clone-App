const mongoose = require('mongoose');

function connectToDb() {
  try {
    mongoose.connect(process.env.DB_CONNECT)
    console.log('Connect to DB')
  } catch (error) {
    console.log(error,"Error from mongoose connection")
  }
}

module.exports = connectToDb