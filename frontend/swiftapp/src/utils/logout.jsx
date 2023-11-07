import { useNavigate } from "react-router-dom";



export default  function Logout(){
    var navigate =useNavigate()
// set cokie to expire, 
//navigate back to login
function out(){console.log("hhhh")
document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
navigate('/login')
}


return(<><button onClick={()=>{out()}}>Logout</button></>)

}