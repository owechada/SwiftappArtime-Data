import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default  function Logout(){
    var navigate =useNavigate()
// set cokie to expire, 
//navigate back to login
function out(){console.log("hhhh")
document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
navigate('/login')
}


return(<>
  <DropdownButton id="dropdown-item-button" title="Dropdown button">
 
 <Dropdown.Item as="button">Action</Dropdown.Item>
 <Dropdown.Item as="button">Another action</Dropdown.Item>
 <Dropdown.Item onClick={()=>{out()}} as="button">Logout</Dropdown.Item>
</DropdownButton>
</>)

}