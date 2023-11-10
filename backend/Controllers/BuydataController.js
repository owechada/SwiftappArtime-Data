
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

for (var keyy in mobilenet){

if(mobilenet[keyy][0]['ID']== data.network){

   var products = mobilenet[keyy][0]['PRODUCT'][0]

   for (let key in products){
if (key=='PRODUCT_ID' ){
    console.log('network name',keyy,'network id', mobilenet[keyy][0]['ID'], 'VS ',data.network )
    console.log(data.productid,'ID')


    senddatareq()

}
 


else{ 


}
   }




}


}



}


async function senddatareq(){

  var url=`https://www.nellobytesystems.com/APIDatabundleV1.asp?UserID=${your_userid}&APIKey=${your_apikey}&MobileNetwork=${mobilenetwork_code}&DataPlan=${dataplan_size}&MobileNumber=${recipient_mobilenumber}&RequestID=request_id&CallBackURL=callback_url`
  var res = await fetch(url)
  console.log(res)
}

export default Buydatacontroller