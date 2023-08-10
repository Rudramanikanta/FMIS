import React from 'react'
import background from './Images/background.jpg'
import logo from './Images/logo.jpg'
function Home() {
  return (
      <div >
       <div style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100%",position:"absolute"}}>
        <div style={{backgroundColor:"#000",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100%",opacity:"0.7"}}></div>
       </div>
       <div style={{backgroundColor:"#000",padding:"10px",position:"absolute",height:"50vh",width:"35%",top:"200px",opacity:"0.7",left:"30%",borderRadius:"30px"}}>
        <img src={logo} style={{height:"50px",width:"50px",borderRadius:"100%"}}></img>
        
       </div>
      </div>
  )
}

export default Home
