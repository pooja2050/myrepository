express=require("express");
app=express();
module=require("./module");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",function(req,resp){
	resp.sendFile("form.html",{root:__dirname});
});
app.post("/calculate",function(req,resp){
	resp.send("Name:"+req.body.nm+"<br>Physics:"+req.body.phy+"<br>chemistry:"+req.body.chem+"<br>maths:"+req.body.math+"<br>Average="+module.average(req.body.phy,req.body.chem,req.body.math));
});
app.listen(3000);
console.log("running at port 3000");