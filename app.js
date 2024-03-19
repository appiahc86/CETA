const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 4000;

//body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.join(__dirname, "public")));

// favicon
// app.use(favicon(__dirname + '/public/img/favicon.ico'));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));


//Load Routes
const Routes = require("./routes/index");

//Use Routes
app.use("/", Routes);


//404 page
app.use((req, res, next) => {
    return res.status(400).send('404');
})



if (process.env.NODE_ENV !== 'production'){

    app.listen(port, async () => {
        console.log(`server running on port ${port}`);
    })

}else app.listen();