

import { useState,useEffect } from "react"
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

function Signupbtn(props) {
    return (<div className="logbtn">
        <button onClick={props.onclick} className='login-btn'>Sign up</button>
    </div>)
}



function Signup(props) {



    var [data, setdata] = useState({ firstname: '', lastname: '',phone:'', email: '', password: '', confirmpassword: '' })

    var [errormsg, seterrormsg] = useState([])
    var [errorisvisible, setalertvisi] = useState(false)
 var [suscess, setSucces]=useState(true)

    function validateSignup() {

        var firstname = data.firstname
        var lastname = data.lastname
        var email = data.email
        var confirmpassword = data.confirmpassword
        var password = data.password
        var phone=data.phone

        if (firstname == '' || phone=='' || lastname == '' || email == '' || password == '' || confirmpassword == '') {
setalertvisi(true)
setSucces(true)

           
           
            confirmpassword == '' && seterrormsg(["Confirm password can't be empty"])
            password == '' && seterrormsg(["Password is empty"])

            email == '' && seterrormsg(["Email is empty"])
            phone== '' && seterrormsg(["Phone number is empty"])

            lastname == '' && seterrormsg(["Last name cannot be empty"])

            firstname == '' && seterrormsg(["First name cannot be empty"])






        }

        else {
seterrormsg([])
setalertvisi(false)


if(!(password==confirmpassword)){
    seterrormsg(["Passwords don't match"])
    setalertvisi(true)
    

}

else{


    props.setld(true)
   var mesg= Registeruser(data,setSucces,setalertvisi) 
    
    mesg.then((res)=>{
        props.setld(false)
seterrormsg([res])
    })
   
}


        }


    }


    return (<div className='login-container'>
        <h1>Sign up for an account   <hr/></h1>
       
        {errorisvisible ? <Alert className='alert-error' variant='danger'>{errormsg.map((item, key) => {
            return (<p key={key}><i class="fa-solid fa-circle-exclamation"></i> {item}</p>)

        })}</Alert> : ''}

{!suscess ?<Alert className='alert-error' variant='success'><i class="fa-regular fa-circle-check"></i> Account created successfuly</Alert>:""}

        <input onChange={(e) => {
            data.firstname = e.target.value
            setdata(data)

        }} name='firstname' placeholder='First name' type='email' />



        <input onChange={(e) => {
            data.lastname = e.target.value
            setdata(data)

        }} name='lastname' placeholder='Last name' type='text' />

<input onChange={(e) => {
            data.phone = e.target.value
            setdata(data)

        }} name='email' placeholder='Valid phone number' type='number' />


        <input onChange={(e) => {
            data.email = e.target.value
            setdata(data)

        }} name='email' placeholder='Active email address' type='email' />



        <input onChange={(e) => {
            data.password = e.target.value
            setdata(data)

        }} name='password' placeholder='Choose password' type='password' />



        <input onChange={(e) => {

            data.confirmpassword = e.target.value
            setdata(data)

        }} name='confirmpassword' placeholder='Confirm password' type='password' />

        <Signupbtn onclick={() => {

            validateSignup()
        }} />
        <div className='login-help'>

            <p>Already have an account?<Link to="/login"> Login</Link></p>

        </div>

    </div>)

    }


    
async function Registeruser(data,suscalback,errorcalback) {
    const url = 'https://swiftapp.onrender.com/signup';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!(response.status==200 || response.status==400)) {
        // If the response status is not in the range 200-299, it's an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Assuming you want to work with the response data
      const responseData = await response.json();
       
      suscalback(responseData.iserror)
      errorcalback(responseData.iserror)
      return responseData.response

      console.log('Response Data:', responseData);
    
      // You can return the response data or perform other actions here
      return responseData;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Fetch error:', error);
      suscalback(true)
      errorcalback(true)
      return "Could not create your account"
    
    }
}

export default Signup