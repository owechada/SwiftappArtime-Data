
import UserModel from "../Models/UserModel.js"
import bcript from 'bcrypt'

var Signupcontroller=async (req, res, next)=>{
const {firstname,lastname,phone,email,password,confirmpassword}=req.body


const users = await UserModel.find({ email: email });

  
var arr=[]
arr =users
if (!arr.length==0){

res.send({response:"User with email already exists, login instead",iserror:true})
}
else{ 
 var hashedpass= await bcript.hash(password,10)
    var user_details={firstname:firstname,lastname:lastname,phone:phone,email:email,passwordhash:hashedpass, balance:"0", transacttions:[]}

var user = new UserModel(user_details)
    var us=await user.save()
    res.send({response:"Account created",iserror:false})
}








}
 

export default Signupcontroller