
const path = require("path")
const history = require("connect-history-api-fallback")


app.use(history())



app.get("/", function (req, res) {
  res.render(path.join(__dirname + "/index.html"))
})

app.listen(5000, function () {
  console.log( "Express serving on 5000!" )
})
