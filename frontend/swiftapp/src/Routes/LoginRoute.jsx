
import { useState, useEffect } from "react"
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'
import { Link, useNavigate } from 'react-router-dom'
import getCookie from "../utils/getcookie";


function Loginbtn(props) {
    return (<div className="logbtn">
        <button onClick={props.onclick} className='login-btn'>Login</button>
    </div>)
}


function Login(props) {


    var navigate = useNavigate()


    var [data, setdata] = useState({ email: '', password: '' })

    var [errormsg, seterrormsg] = useState([])
    var [errorisvisible, setalertvisi] = useState(false)
    var [suscess, setSucces] = useState(true)

useEffect(()=>{


    var ca = getCookie('uid')
    console.log(ca)

    if (ca == '') {
 

    }

    else {
        navigate('/dashboard')

    }


})


    function validateLogin() {


        var email = data.email
        var password = data.password

        if (email == '' || password == '') {
            setalertvisi(true)
            setSucces(true)



            password == '' && seterrormsg(["Password is empty"])

            email == '' && seterrormsg(["Email is empty"])





        }

        else {
            seterrormsg([])
            setalertvisi(false)

            props.setld(true)
            //login user auth


            var login = Loginuser(data, setSucces, setalertvisi)

            login.then((res) => {
                props.setld(false)
                seterrormsg([res.msg])
                console.log(res.user)
         setSucces((lat)=>{
        
            
            if (!lat) {
                   

                const d = new Date();
                d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
               
                document.cookie = "uid=" + res.user.email + ";" + expires + ";path=/";
                let decodedCookie = decodeURIComponent(document.cookie);
              
            }

            return lat
         })
                
            })

        }


    }



    return (<div className='login-container'>



        <h1>Login to your account  <hr /></h1>

        {errorisvisible ? <Alert className='alert-error' variant='danger'>{errormsg.map((item, key) => {
            return (<p key={key}><i class="fa-solid fa-circle-exclamation"></i> {item}</p>)

        })}</Alert> : ''}

        {!suscess ? <Alert className='alert-error' variant='success'><i class="fa-regular fa-circle-check"></i> Login success</Alert> : ""}

        <input onChange={(e) => {
            data.email = e.target.value
            setdata(data)

        }} name='email' placeholder='Email' type='email' />



        <input onChange={(e) => {
            data.password = e.target.value
            setdata(data)

        }} name='password' placeholder='Password' type='password' />
        <Loginbtn  onclick={validateLogin} />
        <div className='login-help'>

            <p><Link to="/fotgot-pass">Forgot password</Link></p>
            <p>Don't have an account?<Link to="/signup"> Sign up</Link></p>

        </div>

    </div>)
}


async function Loginuser(data, suscalback, errorcalback) {
    const url = 'https://swiftapp.onrender.com/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!(response.status == 200 || response.status == 400)) {
            // If the response status is not in the range 200-299, it's an error
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming you want to work with the response data
        const responseData = await response.json();

        suscalback(responseData.iserror)
        errorcalback(responseData.iserror)
        return { msg: responseData.response, user: responseData.user }

    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Fetch error:', error);
       await  suscalback(true)
       await  errorcalback(true)
        return { msg: "Could not login at the moment", user: null }

    }


}


export default Login