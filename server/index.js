import express from "express"
import fileUpload from "express-fileupload"
import cors from 'cors'
import router from "./routes/routes.js"

const port = 3000
const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use('/api', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})