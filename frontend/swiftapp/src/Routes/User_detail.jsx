
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

    return(<>
     <>Profile view user</>
    </>)
}