import React, { useState } from 'react'
import vg from "../assets/contact.jpg";
import toast from "react-hot-toast";
const Contact = () => {

  
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log(name,email,message);
      toast.success("message send");
    }
  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact ME</h2>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='your name' required></input>
                <input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='your email' required></input>
                <input type='text'  value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='your Message' required></input>
              <button type='submit'>Send</button>
            </form>
        </section>
      <aside>
        <img src={vg} alt='back'></img>
      </aside>

    <div id='footer'>

        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
     <div id='social'>
        <aside>
         <a href='https://in.linkedin.com/in/ritik-lahari-267213254'><img src='' alt='linkedin'></img></a>
         <a href='https://in.linkedin.com/in/ritik-lahari-267213254'><img src='' alt='Instagram'></img></a>
         <a href='https://in.linkedin.com/in/ritik-lahari-267213254'><img src='' alt='Facebook'></img></a>
         <a href='https://in.linkedin.com/in/ritik-lahari-267213254'><img src='' alt='Email'></img></a>
         </aside>
    </div> 

    </div>

    </div>
  )
}

export default Contact
