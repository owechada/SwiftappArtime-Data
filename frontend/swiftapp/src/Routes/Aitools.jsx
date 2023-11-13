import Button  from "../Components/Button";
import {useNavigate} from 'react-router-dom'

export default function(){

var navigate=useNavigate()

    return(<div className=" ait dashbaord-section">
    <img src='/images/ai-img.png' />
   

<div className="ait-actions">

    <Button onclick={()=>{
navigate("/Tti")

    }} text="AI Text to Image generator"/>

    <Button  onclick={()=>{
navigate("/Aic")

    }} text="AI Chat bot"/>
</div>

    </div>)
}