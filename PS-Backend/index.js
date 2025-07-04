const express = require("express") ;
const instaData = require("./dataPS.json") ;
const app = express() ;
const port = 333 ;

app.set("view engine" , "ejs") ;
app.use(express.static("public")) ;

app.use(express.urlencoded( {extended : true })) ;
app.use(express.json()) ;


app.use( (req , res , next) => {
    console.log("ParvatiammaShivappa , request received") ;
    next() ;
}) ;


app.get("/" , (req , res) => {
    res.send("<h1>ParvatiammaShivappa says , this is root route") ;
}) ;

app.get("/www.instagram.com" , (req , res) => {
    res.send("welcome to instagram") ;
}) ;
app.get("/www.instagram.com/:username" , (req , res) => {
    console.log(req.params) ;
    let { username } = req.params ;
    const data = instaData[username] ;
    console.log(req.query) ;
    let { q , bgColor , color } = req.query ;
    res.render("home" , { instaData : data }) ;
}) ;

app.get("/insta-login" , (req , res) => {
    let { username , password } = req.query ;
    let data = instaData[username] ;
    res.render("home" , { instaData : data }) ;
}) ;
app.post("/insta-login" , (req , res) => {
    console.log(req.body) ;
    let { username , password } = req.body ;
    let data = instaData[username] ;
    res.render("home" , { instaData : data }) ;
}) ;

app.use( (req , res , next) => {
    res.status(400).render("notFound") ;
}) ;


app.listen(port , () => {
    console.log(`ParvatiammaShivappa , our server is listening on 
        port.no ${port}`) ;
}) ;