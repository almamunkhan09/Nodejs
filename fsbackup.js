// This file reads the contents of the file

const fs = require('fs');
const path = require("path")


fs.readFile(path.join(__dirname,".","text.txt"),"utf8", (err,data) => {
    if (err) throw err;
    console.log(data);

});



process.on("uncaughtException", err =>{
    console.error(`There is an uncaught error  ${err} `);
    process.exit(1);
}) 



fs.writeFile(path.join(__dirname,".","text1.txt"),"Hello\n",err=> {
    if (err) throw err;
    console.log("Write Completed")

    fs.appendFile(path.join(__dirname, '.', 'text1.txt'), "Hi new line appended here", err =>{
        if (err) throw err;
        console.log("A new line appended to the file")
        
        
        fs.rename(path.join(__dirname,".","text1.txt"), path.join(__dirname,".","newText1.txt"),err=> {
            if (err) throw err;
            console.log("Rename completed") ;
        
        })


    
    });
    

})

