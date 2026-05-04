const express = require("express");
const app = express();
let port = 8000;
app.listen(port, ()=>{
    console.log("App is listening")
})
app.get("/books", (req, res)=>{
    res.send("you tried for books")
    res.render("books.ejs")
})
app.get("/books/new", (req, res)=>{
    res.send("List of the new books")
    res.render("newbooks.ejs")
})
app.post("/books/new",(req,res)=>{
    res.send("List the new book")
})
app.get ("/book/:id",(req, res)=>{
    res.send("Unique book")
    let {id} = req.params();
    let data = require("data.json");
    if(id==1){
        let name = data[0].title;
    }
    if(id==2){
        let name = data[1].title;
    }
   res.render("idx.ejs");

    
})
app.post("/book/new",(req,res)=>{
    res.send("List of the new books")
})
