const express = require("express") ;
const instaData = require("./dataPs.json") ;
const path = require("path") ;
const app = express() ;

const port = 333 ;
app.set("view engine" , "ejs") ;
app.use(express.static(path.join(__dirname , "views"))) ;

app.use( (req , res , next) => {
    console.log("ParvatiammaShivappa , request received...") ;
    next() ;
}) ;

app.get("/" , (req , res) => {
    res.send("<h1>ShivappaParvatiamma says this is the root route</h1>") ;
}) ;
app.get("/www.instagram.com/:username" , (req , res) => {
    console.log(req.params) ;
    let { username } = req.params ;
    console.log(req.query) ;
    let { q , bgColor , color } = req.query ;
    let data = instaData[username] ;
    res.render("home.ejs" , { instaData : data }) ;
}) ;
app.listen(port , () => {
    console.log(`ParvatiammaShivappa , server listening`) ;
})
