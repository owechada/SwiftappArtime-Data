import Dropdown from "react-bootstrap/Dropdown";
import  Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import getCookie from "../utils/getcookie";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import  Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import finduser from "../utils/getUser";



function NetworkDropDown(props) {



var [listofdata,setlistofarray]=useState([])
var [choosennetwork, setChoosen]=useState('Select data plan')
 var listt=[]
 



  for(let key in props.netobj){

 
if(props.netobj[key][0]['ID']==props.id){

listt=((props.netobj[key][0]['PRODUCT']))
 

} }
  

useEffect(()=>{

  setChoosen('Select data plan')
  props.set_price("0.00")
  props.set_productid(undefined)
 
}, props.id)
 

function setChoosen_(item){

setChoosen(item['PRODUCT_NAME'])
 

var num =parseFloat(item['PRODUCT_AMOUNT'])+15
const formattedCurrency = num.toLocaleString("en-US", {
  style: "decimal",
  minimumFractionDigits: 1, // Set the number of decimal places (0 for integers)
});
props.set_price(formattedCurrency)
props.set_productid(item['PRODUCT_ID'])
}
  return (
    <Dropdown className="item-men">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
{choosennetwork}
      </Dropdown.Toggle>

      <Dropdown.Menu >

        {listt.map((item,key)=>{

return(  <Dropdown.Item className="dditem"   onClick={()=>setChoosen_(item)} >{item['PRODUCT_NAME']} </Dropdown.Item>
)   })
        
        
        }
  

        </Dropdown.Menu>
    </Dropdown>
  );
  }
     
  
  function NetworkdataplanDropDown(props) {

    var [choosenplan, setChoosenplan]=useState('Choose Network')
   
   
   
    function setchid(){
      console.log(props.id)

      if(choosenplan=="MTN"){

props.chosen('01')

      }

      else if(choosenplan=='Airtel'){

        props.chosen('04')

      }
      else if(choosenplan=="9Mobile"){


        props.chosen('03')
      }

      else if(choosenplan =='Glo'){

        props.chosen('02')

      }
    }
    useEffect(()=>{
setchid()

    },[choosenplan])
   
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
  {choosenplan}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        <Dropdown.Item className="dditem" onClick={()=>setChoosenplan('MTN')} >MTN</Dropdown.Item>
          <Dropdown.Item className="dditem"  onClick={()=>setChoosenplan('Airtel')} >Airtel</Dropdown.Item>
          <Dropdown.Item className="dditem" onClick={()=>setChoosenplan('9Mobile')} >9 Mobile</Dropdown.Item>  
          <Dropdown.Item className="dditem" onClick={()=>setChoosenplan('Glo')} >Glo</Dropdown.Item>  
          </Dropdown.Menu>
      </Dropdown>
    );
    }
      

export default function BuyData(props){

  
var navigate =useNavigate()
  var [selectedntid,setselectedntid]=useState()
 var [all_data_products,setallp]=useState({})
 var [price, setprice]=useState('0.00')
 var [productid, setproid]=useState()
 var [phone_no, setphone]=useState()
 var [once,setonce]=useState()
var [user, setuser]=useState({user:{balance:"0"}})
 var [error,seterror] =useState([])

async  function  validatedetails(){


if (!phone_no || !productid || !selectedntid ){

  !phone_no && seterror(['Enter a valid receiver number']) 
!productid && seterror(['Select a data plan'])
!selectedntid && seterror(["Select a network"])

}
else{

seterror([])

if (!(phone_no.length==11)){
seterror(['Invalid phone number'])
 

}

else{

  try{
 
  props.setld(true)


var data={
  phone_no:phone_no,userid:123,productid, network:selectedntid
}
 var res= await fetch('http://localhost:4000/buydata',  {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}) 


var res2= await res.json()

console.log(res2)
props.setld(false)
}

catch(e){
  props.setld(false)
console.log(e)

}
}
 
}
}


async function  getproducts(){
  try {
var products_all = await fetch('https://www.nellobytesystems.com/APIDatabundlePlansV2.asp?UserID=CK10284166')
var pp= await products_all.json()
var networks=await pp['MOBILE_NETWORK']



return networks
  }

  catch(e){
    return {}
  }
}

useEffect( ()=>{
getproducts().then((res)=>{

setallp(res)

})
 
},[selectedntid])



useEffect(()=>{


  var ca = getCookie('uid')
  console.log(ca)

  if (ca == '') {
    navigate('/login')

  }

  else {
    


  }

  finduser(getCookie('uid')).then((res)=>{


    setuser(res)
   })
},[once]   )






 const userbal = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  
}).format(parseInt(!(user.balance ==undefined) ? user.balance:'0'));



return(<div className="buy-data-section">
<h1> <i class="fa-solid fa-circle-nodes"></i> Buy Data</h1>
<hr/>
<NetworkdataplanDropDown id={selectedntid} chosen={(res)=>{setselectedntid(res)}}/>

<p>Wallet balance:<b> ₦{userbal}</b></p>
<NetworkDropDown set_productid={setproid} set_price={setprice} id={selectedntid} netobj={all_data_products}/>
<p>Price: <b> ₦ {price} </b></p>
<label>Recipient's Phone</label>
<input onChange={(e)=>{setphone(e.target.value)}} name='amount' type="number" placeholder="070..."/>
{!(error.length ==0) ? <Alert className='alert-error data-error' variant='danger'><i class="fa-solid fa-circle-exclamation"></i>  {error}</Alert> :''}

<Button onclick={validatedetails} text='Proceed' />
</div>)
}


