
import UserModel from "../Models/UserModel.js"


var Signupcontroller=async (req, res, next)=>{
const {firstname,lastname,phone,email,password,confirmpassword}=req.body
var user_details={firstname:firstname,lastname:lastname,phone:phone,email:email,passwordhash:password}

var user = new UserModel(user_details)

const users = await UserModel.find({ email: email });


var arr=[]
arr =users
if (!arr.length==0){

res.send({response:"User with email already exists, login instead",iserror:true})
}
else{
    var us=await user.save()
    res.send({response:"Account created",iserror:false})
}








}
 

export default Signupcontroller