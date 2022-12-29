import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    console.log('hello world')
})

app.listen(3000)