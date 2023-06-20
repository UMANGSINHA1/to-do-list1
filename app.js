const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js")
const app=express();
let items= ["Buy Food","Cook Food","Eat Food"];//array to prevent overwriting
let workItems=[] ; 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",function(req,res){    //loading home page from line 7 to 23
   let day=date();
res.render("list",{listTitle:day, newListItems:items});


});
app.post("/",function(req,res){ 
    let item=req.body.newItem;
    if(req.body.list==="Work") {
        workItems.push(item);
        res.redirect("/work");
    } //24-29 response to request to home route 
    else{
        items.push(item); //to push variable item in array items
        res.redirect("/");
    }
  
    

});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", newListItems:workItems});
})
app.get("/about",function(req,res){
    res.render("about");
})

app.listen(5000,function(){
    console.log("Server is running on port 5000.");
});

