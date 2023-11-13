async function finduser(emailu) {

    var res = await fetch('https://swiftapp.onrender.com/user', { method: 'POST', 
    headers: { 'Content-Type': 'application/json' } 
,body:JSON.stringify({email:emailu})
})
var resbody =await res.json()
console.log(resbody)

return (resbody)
}

export default finduser