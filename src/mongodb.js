const momgodb = require('mongodb')
const MongoClient = momgodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database!')
  }

  console.log('connected correctly!')
  const db = client.db(databaseName)
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
  /**
  db.collection('users').insertMany([
    {
      name: 'ma', age: 25
    },
    {
      name: 'mo', age: 15
    }
  ], (error, result) => {
    if (error) {
      return console.log('unable to insert user')
    }
    console.log(result.ops)
  })
        db.collection('users').insertOne({
       name: 'ms', age: 22
     }, (error, result) => {
       if (error) {
         return console.log('unable to insert user')
       }
       console.log(result.ops)
   
     })
   
  */


})