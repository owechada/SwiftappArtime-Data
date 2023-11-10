
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import getCookie from "../utils/getcookie"

export default function (){


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
    },[once])

    return(<section className="dashbaord-section">

<i class="fa-solid fa-address-card"></i>
     <div className="user-details">Profile view user</div>
    </section>)
}