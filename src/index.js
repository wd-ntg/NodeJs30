import express from "express"
import configViewEngine from "./config/viewEngine"
import initAdminPage from "./router/admin"
import initStudentPage from "./router/student"

const app = express()
const port = 2080

configViewEngine(app)
initAdminPage(app)
initStudentPage(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

