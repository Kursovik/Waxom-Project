const express = require("express")
const path = require("path")
const parser = require("body-parser")
const app = express()

const urlencodedParser = parser.urlencoded({ extended: false })
app.set("view engine", "ejs")
app.use(express.static(path.resolve(__dirname, "../client/")))
app.use(express.static(path.resolve(__dirname, "../")))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "index.html"))
})
app.get("/contact", (req, res) => {
  res.render("form-success")
})
app.post("/contact", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  res.render("form-success", req.body)
})
app.listen(3000, () => console.log("Сервер запущен"))
