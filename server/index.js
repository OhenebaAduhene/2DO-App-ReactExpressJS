import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router/taskRouter.js'

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dotenv.config()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URL).then(() => console.log("DB conneced")).catch(err => console.log(err))

app.use('/tasks', router)
app.use('/tasks/:id', router)


app.listen(3000)