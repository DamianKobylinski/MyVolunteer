const { Router } = require('express')
const mysql = require('mysql')
const router = Router()

const connectToDatabase = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myvolunteer'
})

router.use('/test', (req, res) => {
  res.end('Test API!')
})

router.use('/tasks', (req, res) => {
  try {
    connectToDatabase.query('SELECT * FROM tasks', (err, result) => {
      if (err) {
        throw err
      } else {
        res.json({
          data: result
        })
      }
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
})

module.exports = router
