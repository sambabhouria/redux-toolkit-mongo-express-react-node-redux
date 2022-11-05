
const mongoose = require('mongoose')

const connectDB = async () => {
  console.log('mongo uri', process.env.MONGODB_URL)
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log('Not connected errror : ', error)
    process.exit(1)
  }
}

module.exports = connectDB
