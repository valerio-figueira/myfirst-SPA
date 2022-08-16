/*
INCLUDING SOME DEPENDENCIES
*/
const express = require("express");
const path = require("path");

/*CREATING EXPRESS APP*/
const app = express();

/*BRING ALL BACK TO SERVE /STATIC PATH*/
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

/*GRAB THE REQUEST AND RESPONSE*/
/*THIS METHOD IS GOING TO SEND ALL BACK TO ROOT PATH*/
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


app.listen(process.env.PORT || 5500, () => console.log("Server running..."));