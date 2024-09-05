

import React, { useState } from 'react'
import axios from 'axios'
 

function Email() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [age,setAge]=useState('');

const handlesubmit=(e)=>{
    e.preventDefault();
const formData={name,email,age};
axios.post('http://localhost:1500/userpost',formData)
.then(response=>{
    console.log('Response:',response.data);
    
})
.catch(error=>{
    console.error('error:',error);
    
})

}



  return (
    <div className='sh'>
<form onSubmit={handlesubmit} action="">
<h1>FORM</h1>

<label htmlFor="">Name:</label>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/><br />
<label htmlFor="">Email:</label>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='email'/><br />
<label htmlFor="">Age:</label>
<input type="number" value={age} onChange={(e)=>setAge(e.target.value)}placeholder='age'/><br />
<button type='submit' >submit</button> 
</form>
    </div>
   
  )
}

export default Email
