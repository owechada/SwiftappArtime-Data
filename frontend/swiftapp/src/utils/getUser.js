async function finduser(emailu) {

    var res = await fetch('http://localhost:4000/user', { method: 'POST', 
    headers: { 'Content-Type': 'application/json' } 
,body:JSON.stringify({email:emailu})
})
var resbody =await res.json()
console.log(resbody)

return (resbody)
}

export default finduser