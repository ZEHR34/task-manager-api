const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT


/**
 // server down
  app.use((req, res, next) => {
    res.status(503).send('Site is currently down. check back soon!')
  })
  
*/


app.use(express.json())

app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log('Server is running up on port ' + port)
})


/*
const Task = require('../src/models/task')
const User = require('../src/models/user')

const main = async () => {

    const task = await Task.findById('5d645b8aa116e94cbcd79b1e')
    console.log(task)

    await task.populate('owner').execPopulate()
    console.log(task.owner)

const user = await User.findById('5d645b81a116e94cbcd79b1c')
await user.populate('tasks').execPopulate()
console.log(user.tasks)

}


main()

  */