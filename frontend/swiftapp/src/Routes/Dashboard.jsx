
import { useState } from "react"
import Button from "../Components/Button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Dashbaoard() {

var navigate=useNavigate()

    function buydata(){

navigate('/data')
    }


    
    
    function buyairtime(){

        navigate('/airtime')
            }



    var [user, setuser]=useState({})

    async function finduser() {

        var res = await fetch('http://localhost:4000/user', { method: 'POST', 
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


})

finduser()
    return (<section className="dashbaord-section">

        <h2>{user.email}</h2>
        <div className="dash-upper">
            <small>Account balance <i class="fa-solid fa-eye"></i></small>

            <p className="account-amount"><i class="fa-solid fa-naira-sign"></i>5,000</p>
        </div>
        <div className="dash-action-buttons">

            <button><i class="fa-solid fa-money-bill-transfer"></i>  Deposit</button>
            <button> <i class="fa-solid fa-building-columns"></i> Withdraw</button>
        </div>

        <div className="dash-lower">


            <div className="airtime-data-card">
                <div>
                    <Button onclick={()=>{
buydata()

                    }} text='Buy data'/>

                </div>
                <div className="-card">
                <Button onclick={()=>{
buyairtime()

                    }} text='Buy airtime'/>

                </div>
            </div>


            <div className="soon-card">
                <p>Comming soon</p>
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