const express = require('express');
categoryRouter = express.Router();

var category = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]

// let menu = [
//     { link: "/", name: "Home" },
//     { link: "/category",name: "Category" },
//     { link: "/products",name: "Products" }
// ]


function router(menu) {

    categoryRouter.route("/").get((req,res) =>{
        res.render('category',{title:"category page",data:category,menu})
    });
    
    categoryRouter.route("/details")
    .get((req,res) => {
        res.send("category details")
    });

    return categoryRouter;

};

// categoryRouter.route("/").get((req,res) =>{
//     res.render('category',{title:"category page",data:category,menu})
// });

// categoryRouter.route("/details")
// .get((req,res) => {
//     res.send("category details")
// });

module.exports = router;
