import UserModel from "../Models/UserModel.js"
import bcript from 'bcrypt'
 var  loginController=async (req,res,next)=>{
console.log(req.body)

 var user = await UserModel.findOne({email:req.body.email})
if(user){
console.log(user)
const passwordmatch=await bcript.compare(req.body.password, user. passwordhash)
if(passwordmatch){

res.send({response:"Login success",user:user,iserror:false})
}

else{
res.send({response:"Email or password not correct",user:null,iserror:true})
}
}
 
else{

console.log('not found',user)

res.send({response:"Email or password not correct",user:user,iserror:true})

}
}

export default loginController