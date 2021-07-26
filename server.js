const express = require("express")
const app = express()


//Port listen
const PORT = process.env.PORT || 3000

//Reading static file inside public folders
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

require("./routes/api")(app);
require("./routes/view")(app);

//Port listening
app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
})