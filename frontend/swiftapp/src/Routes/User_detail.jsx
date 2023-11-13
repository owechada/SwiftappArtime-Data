
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import getCookie from "../utils/getcookie"
import Table from 'react-bootstrap/Table';
import finduser from "../utils/getUser";


function DarkExample(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
 
          <th>First Name</th>
          <th>Last Name</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
 
          <td>{props.user.firstname}</td>
          <td>{props.user.lastname}</td>
          <td>{props.user.balance}</td>
        </tr>
         
         <tr>
          <td colSpan={3}>Email: {props.user.email}</td>
         
        </tr>
      </tbody>
    </Table>
  );
}

export default function (){

var [user,setuser]=useState()
    var [once, setonce]=useState()
    var navigate=useNavigate()
 


 
 
    useEffect(()=>{


        var ca = getCookie('uid')
        console.log(ca)
    
        if (ca == '') {
            navigate('/login')
    
        }
    
        else {
           
    
    
        }


        setuser(async ()=>{
var userr=await finduser(getCookie('uid'))

console.log(user,"userssss")

return userr
        })
    },[])

    return(<section className="dashbaord-section">

{!user ?? <DarkExample us={user}/>}
ggg
     </section>)
}