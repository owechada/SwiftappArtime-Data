
import { useState } from "react"
import Button from "../Components/Button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Transactions from "../Components/Transactions"

export default function Dashbaoard() {

var navigate=useNavigate()

    function buydata(){

navigate('/data')
    }


    
    
    function buyairtime(){

        navigate('/airtime')
            }


var [once, setonce]=useState()

    var [user, setuser]=useState({})

    async function finduser() {

        var res = await fetch('https://swiftapp.onrender.com/user', { method: 'POST', 
        headers: { 'Content-Type': 'application/json' } 
    ,body:JSON.stringify({email:getCookie('uid')})
    })
    var resbody =await res.json()
console.log(resbody)

setuser(resbody)
    }





useEffect(()=>{


    var ca = getCookie('uid')
    console.log(ca)

    if (ca == '') {
        navigate('/login')

    }

    else {
       


    }

    finduser()
},[once])
const userbal = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    
  }).format(parseInt(user.balance));
  

    return (<section className="dashbaord-section">
<div className='dash-shadow'>
        <h2> Welcome {user.firstname}</h2>
        <div className="dash-upper">
            <small>Account balance <i class="fa-solid fa-eye"></i></small>

            <p className="account-amount"><i class="fa-solid fa-naira-sign"></i>{userbal}</p>
        </div>
        <div className="dash-action-buttons">

            <button onClick ={()=>{
                navigate('/deposit')
            }}><i class="fa-solid fa-money-bill-transfer"></i>  Deposit</button>
            <button> <i class="fa-solid fa-building-columns"></i> Withdraw</button>
      
      
        </div>

        
        <div className="airtime-data-card">
                <div>
                    <Button onclick={()=>{
buydata()

                    }} text={<><i class="fa-solid fa-circle-nodes"></i> Buy data </> }/>

                </div>
                <div className="airtime-data-card">
                <Button onclick={()=>{
buyairtime()

                    }} text={<><i class="fa-solid fa-compress"></i> Buy airtime</>}/>

                </div>
            </div>

</div>

{user.transacttions &&(<Transactions obj={ user.transacttions} />)}

        <div className="dash-lower">



            <div className="soon-card">
               <img src='/images/atc.png'/>
               <Button onclick={()=>{
navigate('/aitools')

               }} text={<><i class="fa-solid fa-bolt"></i> AI tools</>}/>

            </div>

        </div>

    </section>)
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}