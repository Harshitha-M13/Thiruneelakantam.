const express = require("express") ;
const app = express() ;
const port = 333 ;
const instaData = require("./dataPS.json") ;
const path = require("path") ;

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname , "views")) ;




app.use(express.urlencoded( {extended : true })) ;
app.use(express.json()) ;

app.use(express.static(path.join(__dirname , "public"))) ;


app.use( (req , res , next) => {
    console.log(`ParvatiammaShivappa , request received`) ;
    next() ;
}) ;

app.get("/" , (req , res) => {
    res.send("<h1>ParvatiammaShivappa , says this is root route<h1>") ;
}) ;


app.get("/www.instagram.com/:username" , (req , res) => {
    console.log(req.params) ;
    let { username } = req.params ;
    const data = instaData[username] ;
    if(!data) {
        res.render("notFound") ;
    }
    else {
        res.render("home" , { instaData : data }) ;
    }
}) ;



app.get("/login" , (req , res) => {
    console.log(req.query) ;
    let { username , password } = req.query ;
    let data = instaData[username] ;
    if(!data) {
        res.render("notFound") ;
    }
    else {
        res.render("home" , { instaData : data }) ;
    }
}) ;
app.post("/login" , (req , res) => {
    console.log(req.body) ;
    let { username , password } = req.body ;
    let data = instaData[username] ;
    if(!data) {
        res.render("notFound") ;
    }
    else {
        res.render("home" , { instaData : data }) ;
    }
}) ;
app.use( (req , res , next) => {
    res.status(404).render("notFound") ;
})

app.listen(port , () => {
    console.log(`ParvatiammaShivappa , server is listening on port no : ${port}`) ;
}) ;