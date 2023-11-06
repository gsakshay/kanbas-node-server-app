/** @format */

import express from "express"
import cors from "cors"

import Hello from "./hello.js"
import Lab5 from "./lab5.js"

const app = express()
// Middlewear to allow cross-origin sharing
app.use(cors())
// Passing JSON data to the server in an HTTP Body
app.use(express.json())

const PORT = 4000

Hello(app)
Lab5(app)

app.listen(PORT, () => console.log(`App is up and running on port ${PORT}`))
