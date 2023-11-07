
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



var Buydatacontroller =async (req, res)=>{
var data= await req.body


res.send(data)

/// deduct from user balance

///  make request to clubkonnet url, then proceed to get response


/// send response to interface
var mobilenet=await getproducts()

for (let key in mobilenet){

if(mobilenet[key][0]['ID']== data.network){

   var products = mobilenet[key][0]['PRODUCT'][0]

   for (let key in products){
if (key=='PRODUCT_ID' ){
    console.log(products[key])
    console.log(data.productid)
}



else{ 


}
   }




}


}



}

export default Buydatacontroller