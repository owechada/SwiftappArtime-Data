

import Dropdown from "react-bootstrap/Dropdown";
import  Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import  Alert from "react-bootstrap/Alert";
import { Navigate, useNavigate } from "react-router-dom";
import getCookie from "../utils/getcookie";

function NetworkDropDown() {

  var [choosennetwork, setChoosen]=useState('Choose network')
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
{choosennetwork}
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item className="dditem" onClick={()=>setChoosen('MTN')} >MTN</Dropdown.Item>
        <Dropdown.Item className="dditem"  onClick={()=>setChoosen('Airtel')} >Airtel</Dropdown.Item>
        <Dropdown.Item className="dditem" onClick={()=>setChoosen('9Mobile')} >9 Mobile</Dropdown.Item>  
        <Dropdown.Item className="dditem" onClick={()=>setChoosen('Glo')} >Glo</Dropdown.Item>  
        </Dropdown.Menu>

    </Dropdown>
  );
  }
  
       

export default function BuyAirtime(){
  var navigate =useNavigate()

var [amount, setamount]=useState()
var [phone_number, setphonenumber]=useState()

var [error,seterror] =useState([])

function validatebuyairtime(){
if(!amount || !phone_number){
  !phone_number && seterror(['Enter a valid receiver number']) 
!amount && seterror(['Enter airtime value'])

  
}

else{

  seterror([])

if (!(phone_no.length==11)){
seterror(['Invalid phone number'])
 

}

}}


useEffect(()=>{


  var ca = getCookie('uid')
  console.log(ca)

  if (ca == '') {
    navigate('/login')

  }

  else {
    


  }


})

return(<div className="buy-data-section">
<h1> <i class="fa-solid fa-compress"></i> Buy Airtime</h1>
<hr/>

<NetworkDropDown/>
<p>Wallet ballance: N55</p>

<label>Amount</label>

<input onChange ={(e)=>{setamount(e.target.value) }} name='amount' type ='number' placeholder="N100"/>
<label>Recipient's Phone</label>

<input onChange={(e)=>{ setphonenumber(e.target.value)}} name='phone_number' type="number" placeholder="070..."/>
<Button text="Proceed" />
</div>)
}


