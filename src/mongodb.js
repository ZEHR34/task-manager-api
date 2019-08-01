
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database!')
  }

  console.log('connected correctly!')
  const db = client.db(databaseName)
  /**
      db.collection('tasks').insertMany([
        {
          description: 'clean the room',
          completed: false
        }, {
          description: 'clean the shelf',
          completed: false
        }, {
          description: 'clean the class',
          completed: false
        }, {
          description: 'clean the office',
          completed: false
        }
      ], (error, result) => {
        if (error) {
          return console.log('unable to insert document')
        }
        console.log(result.ops)
      })
  */

  db.collection('users').updateMany(
    {

    }, {
      $inc: {
        age: 2
      }
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  db.collection('tasks').updateMany(
    {
      completed: false
    }, {
      $set: {
        completed: true,
        days: 10
      }
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  db.collection('users').deleteMany({
    age: 28
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


})

