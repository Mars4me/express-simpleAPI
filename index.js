import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = 'mongodb+srv://qwe:123@cluster0.i8ry5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }

}

start()
