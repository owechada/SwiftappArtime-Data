import UserModel from "../Models/UserModel.js"

var findusercontroller =async (req,res)=>{
var data =req.body


var userid=data.email


var user = await UserModel.findOne({email:userid})

 
if (user){

    res.send(user)
    
}
else{ 

    res.send('user not found')
}


}

export default findusercontroller