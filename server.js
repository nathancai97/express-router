const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routes/users')
const fruitsRouter = require('./routes/fruits')


// Express Routes
app.use(express.json());
app.use("/users", userRouter);
app.use("/fruits", fruitsRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
