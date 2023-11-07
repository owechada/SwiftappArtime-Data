
import Logout_ from "../utils/logout"
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate ,Link} from "react-router-dom";

import getCookie from "../utils/getcookie";
import { useState } from "react";

function More() {

    var navigate=useNavigate()
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={ ()=>{
            navigate('/')

          }} >Home </Dropdown.Item>
          <Dropdown.Item >About</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

function Usericon(props) {
var navigate=useNavigate()
var [isloged,setisloged]=useState(false)

    function out(){console.log("hhhh")
document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
navigate('/login')
}

function settl(){
console.log(isloged)
    if(getCookie('uid')){
        setisloged(true)
         
         }

         else{

            setisloged(false)
         }
         
}


    return (
      <Dropdown  onClick={settl} >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i class="fa-solid fa-circle-user"></i>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {isloged?<Dropdown.Item onClick={()=>{navigate('/profile')      }} >Profile</Dropdown.Item>:<Dropdown.Item onClick={()=>{navigate('/signup')      }} >Signup</Dropdown.Item>}
         { isloged? <Dropdown.Item  onClick ={out} >Logout</Dropdown.Item>:<Dropdown.Item onClick={()=>{navigate('/login')      }} >Login</Dropdown.Item>}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
export default function Header_(){






    return(<nav className="header">

<div><Usericon/></div>
    <More/>
    </nav>)
}