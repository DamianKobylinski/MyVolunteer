const express = require('express')
const mysql = require('mysql')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const router = express.Router()

require('dotenv').config()

const connectToDatabase = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myvolunteer'
})

router.post('/tasks', function (req, res) {
  try {
    connectToDatabase.query('SELECT * FROM tasks', (err, result) => {
      if (err) {
        throw err
      } else {
        res.json({
          success: true,
          data: result
        })
      }
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
})

export default {
  path: '/server',
  handler: app
}
