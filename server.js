const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const routf=require('./rest');
const app=new express();
const path=require('path');
const User=require('./backend/usercontroller');
const localstore=require('localStorage');
const url=require('url');
const updatescore=require("./backend/event-score");
const PORT=process.env.PORT || 2000 ;
//middleware
app.use(express.json());

app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views'));
 app.set("view engine","hbs");
app.use(express.static(__dirname + '/public'));

//connection
const DB=process.env.MONGO_URL || "mongodb+srv://Shivangi:Zigzag1097@cluster0.y1ibt.mongodb.net/firstdb?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true 
}).then(con=>console.log("Connection Successfull!!"))
.catch(err=>console.log(err));
//handling route
app.listen(PORT,()=>{
    console.log("Connected to port!");
});
app.route("/").get(routf.gethomefile);
app.route("/register").post(User.createuser).get(routf.getregisterfile);
app.route("/login").get(routf.getloginfile).post(User.getuser);
app.route("/gameagent1").get(routf.getgamefile1);
app.route("/gameagent2").get(routf.getgamefile2);
app.route("/gameagent3").get(routf.getgamefile3);
app.route("/logingame").get(routf.getgamelogin).post(User.getusergame);
app.route("/logout").get(routf.logout);
app.route("/highscore1/:Score").get(updatescore.store_score1);
app.route("/highscore2/:Score").get(updatescore.store_score2);
app.route("/highscore3/:Score").get(updatescore.store_score3);




