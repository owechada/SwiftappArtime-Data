
import UserModel from "../Models/UserModel.js"


var Signupcontroller=async (req, res, next)=>{
var {firstnam,lastnam,phon,emai,passwor,confirmpassword}=req.body
var user_details={firstname:firstnam,lastname:lastnam,phone:phon,email:emai,passwordhash:passwor}

var user = await UserModel.create({ firstname: firstnam, lastname: lastnam, email: emai, phone: phon, passwordhash: passwor})


await user.save()



res.send('signup')






}
 

export default Signupcontroller