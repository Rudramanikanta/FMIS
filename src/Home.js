import React, { useContext } from 'react'
import background from './Images/background.jpg'
import logo from './Images/logo.jpg'
import Input from './Input'
import { dataprovider } from './Context'
function Home() {
  const details=useContext(dataprovider)
 console.log(details[1])
  return (
      <div >
       <div style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100%",position:"absolute"}}>
        <div style={{backgroundColor:"#000",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100%",opacity:"0.7"}}></div>
       </div>
       <div style={{backgroundColor:"#000",padding:"10px",position:"absolute",height:"fit-content",width:"35%",opacity:"0.7",left:"30%",borderRadius:"30px"}}>
        <img src={logo} style={{height:"50px",width:"50px",borderRadius:"100%"}}></img>
        <div style={{padding:"10px"}}>
        <Input name="farmer name" setnames={details[1]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="ahdhar number" setnames={details[3]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="cropname" setnames={details[5]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="state" setnames={details[7]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="mandalam" setnames={details[9]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="village name" setnames={details[11]}></Input>
        </div>
        <div style={{padding:"10px"}}>
        <Input name="sachivalayam number" setnames={details[13]}></Input>
        </div>
        <div style={{padding:"20px"}}>
          <button className='btn btn-outline-secondary'>Submit</button>
        </div>
       </div>
      </div>
  )
}

export default Home
