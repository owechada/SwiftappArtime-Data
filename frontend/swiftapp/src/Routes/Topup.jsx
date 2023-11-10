
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '../Components/Button';
import { useState } from 'react';
import { Alert } from 'react-bootstrap/Alert';
import getCookie from '../utils/getcookie';
import { useNavigate } from 'react-router-dom';


function generateREF(phone) {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const timestampString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return `${phone}${timestampString}`;
  }
  function Sucessview(props){

    const amount = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      
    }).format(parseInt(props.amount ));
    
  

    return(<div className='loader-container2'>
        <div className='popup-success'>
      
<div className='icon-succes'>

<i class="fa-solid fa-circle-check fa-bounce" style={{'color':"#05ff2f"} }></i>

</div>

<div> 

    <p> ₦ {`${amount} was added to your wallet successfuly`}</p>
</div>
  </div>  
</div>)
  }



export default function Topup(props) {
var [succesamount,setsuccesamount]=useState('')
var [ispaysucess, setissucess]=useState(false)
var [error, seterror]=useState([])
var navigate =useNavigate()

var [inputt_value, setinputval]=useState()
function initializepay(){





  if(!(inputt_value )|| isNaN(inputt_value) || inputt_value.length<3){

seterror(['Invalid naira amount, must be N100 and above'])
return
  }

  else{
    props.setld(true)
    seterror([])
  }

    var reff= generateREF('owechada@gmail.com').replace(/[^a-zA-Z0-9]/g, '');
    
    console.log (reff)
      
          var handler = PaystackPop.setup({
            key: 'pk_test_880f04019cbc59dfc7488ce09f2671ac6c0ecf2e', 
            email:"owechada@gmai.com",
            amount: inputt_value * 100,  
            currency: 'NGN',  
            ref: reff,  
            callback:   function(response) {
       console.log('done!.....')
    
              var reference = response.reference;
         fetch(`https://swiftappcallbacks.onrender.com/payments?ref=${reference}&&user=${getCookie('uid')}`)
         .then(( ourserverres)=>{
    
         return ourserverres.json()
          }).then((jjs)=>{
    
    if(jjs.data.status=="success"){
    
    var amount =(parseInt (jjs.data.amount)/100)
        console.log(`Top up succes ${amount}`)

        setissucess(true)
        setsuccesamount(amount)
        props.setld(false)

        setTimeout(()=>{

          setissucess(false)
navigate('/dashboard')
        },3000)
    }
    
    else{
      navigate('/dashboard')
    console.log(`Payment failed ${amount}`)
    
    }
    
          })
      
             
            },
            onClose: function() {

              props.setld(false)
              alert('Transaction was not completed, window closed.');
            },
          });
          handler.openIframe();
        
    }
    
    
    

    return (<div className="dashbaord-section login-container" >
{ispaysucess && <Sucessview amount={succesamount} />}
        <p>Top up with paystack</p>
        <label>Amount in naira</label>
        <InputGroup className="mb-3">
            <InputGroup.Text >₦</InputGroup.Text>
            <Form.Control onChange={ (e)=>{
              console.log(e.target.value)
              setinputval(e.target.value)
            }} aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        {!(error.length ==0) ? <Alert className='alert-error data-error' variant='danger'><i class="fa-solid fa-circle-exclamation"></i>  {error}</Alert> :''}


        <Button onclick={()=>{ initializepay()}} text="Proceed" />
    </div>)
}