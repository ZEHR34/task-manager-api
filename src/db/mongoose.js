const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api' // connection url + db name

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})




/*
const me = new User({
  name: "         Mo Saad        ", email: "    mo@gmail.com         ", password: "passwgord"
})

const task = new Task({
  description: 'Claen the board',
  completed: false
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log(error)
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log(error)
})
*/