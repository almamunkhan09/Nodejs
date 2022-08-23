const { application } = require('express');
const express = require('express');
const app = express();
let dotenv = require('dotenv');
dotenv.config()


let menu = [
    { link: "/", name: "Home" },
    { link: "/category",name: "Category" },
    { link: "/products",name: "Products" }
]

app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
app.set("views","./src/views");





let port = process.env.PORT || 9000;
const categoryRouter = require("./src/router/categoryRouter")(menu);
const productRouter = require("./src/router/productRouter")(menu);




app.get("/",(req,res) =>{

    res.render("index",{title:"Home Page", menu });

});







app.use("/category",categoryRouter);
app.use("/products",productRouter)













// app.get("/products",(req,res) =>{
//     res.send(products);
// });

// app.get("/category",(req,res) =>{
//     res.send(category);
// });


// app.get("/category/details", (req,res) =>{
//     res.send("category details")
// });

// app.get("/details", (req,res) =>{
//     res.send("Products details")
// });

app.listen(port, err =>{
    if (err) throw err;
    console.log("express server is listening on port 900");

});

app.get("/home", (req,res) => {
    res.send("<h3>Hello from the Home pages</h3>");


});

app.get("/about", (req,res) =>{

    res.send("<h3>Hello from the about page.</h3>")
})