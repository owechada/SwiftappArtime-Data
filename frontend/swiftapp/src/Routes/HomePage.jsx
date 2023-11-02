import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Dashboard from './Dashboard';




function Signup() {



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

   var mesg= Registeruser(data,setSucces,setalertvisi) 
    
    mesg.then((res)=>{

seterrormsg([res])
    })
   
}


        }


    }


    return (<div className='login-container'>
        <h1>Sign up for an account</h1>
        {errorisvisible ? <Alert className='alert-error' variant='danger'>{errormsg.map((item, key) => {
            return (<li key={key}>{item}</li>)

        })}</Alert> : ''}

{!suscess ?<Alert className='alert-error' variant='success'>Account created successfuly</Alert>:""}

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

            <p>Already have an account?<a hef="#"> Login</a></p>

        </div>

    </div>)

}





function Loginbtn() {
    return (<>
        <button className='login-btn'>Login</button>
    </>)
}


function Signupbtn(props) {
    return (<>
        <button onClick={props.onclick} className='login-btn'>Sign up</button>
    </>)
}
function Login() {

    return (<div className='login-container'>
        <h1>Login to your account</h1>

        <label for='email'>Email</label>
        <input name='email' placeholder='Email address' type='email' />


        <label  >Password</label>
        <input name='password' placeholder='Password' type='password' />
        <Loginbtn />
        <div className='login-help'>

            <p><a hef="#">Forgot password</a></p>
            <p>Don't have an account?<a hef="#"> Sign up</a></p>

        </div>

    </div>)
}


export default function HomePage() {



    return (<div>
        <Dashboard />
        <Login />
        <Signup />

    </div>)
}

async function Registeruser(data,suscalback,errorcalback) {
    const url = 'http://localhost:4000/signup';
  
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
    }
  }
  
 