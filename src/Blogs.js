import bananna from './Images/bananna.jpg'
import cotton from './Images/cotton.jpg'
import maize from './Images/maize.jpg'
import paddy from './Images/paddy.jpg'
import papaya from './Images/papaya.jpg'
import React, { Component } from 'react'

export default class Blogs extends Component {
    state={
        data:[
            {name:"bananna",
             photo:bananna
            },
            {name:"cotton",
             photo:cotton
            },
            {name:"maize",
             photo:maize
            },
            {name:"paddy",
             photo:paddy
            },
            {
                name:"papaya",
                photo:papaya
            }
        ],
        data2:[
            {name:"bananna",
             photo:bananna
            },
            {name:"cotton",
             photo:cotton
            },
            {name:"maize",
             photo:maize
            },
            {name:"paddy",
             photo:paddy
            },
            {
                name:"papaya",
                photo:papaya
            }
        ]
    }
    handleData(e){
        console.log(e.target.value)
        if(e.target.value!=""){
            const search=this.state.data.filter((value)=>{
                return value.name.indexOf(e.target.value)>-1
            })
            this.loopdata(search);
            }
            else{
                this.loopdata(this.state.data)
            }
    }
    loopdata(arr){
       this.setState({
        data2:arr,
       })
      }
  render() {
    var sample=this.state.data2.map((value)=>(
             
        <div key={value.id} className="card w-33" style={{width: "18rem",padding:"20px",position:"relative",outline:"none",border:"0px"}}>
        <img className="card-img-top" src={value.photo} alt="Card image cap"></img>
        <div className="card-body">
          <p className="card-text">{value.name}</p>
        </div>
      </div>
    )
)
console.log(sample)
    return (
        <div className='dark'>
            <center>
                <div style={{padding:"10px",border:"1px solid",borderRadius:"20px",width:"fit-content"}}>                 
                <input type="text" placeholder='search' style={{outline:"none",border:"none"}} onChange={(e)=>this.handleData(e)}></input>
                                 </div>
                 <button className='btn btn-outline-dark'>Submit</button>
            </center>
         {sample}
         </div>
    )
  }
}

// export default function Blogs() {
   
//     loopdata(data)
//     function handleData(e){
        
//     var sample=null;
   
//     return (
//         <div className='dark'>
//             <center>
//                 <div style={{padding:"10px",border:"1px solid",borderRadius:"20px",width:"fit-content"}}>
//                 <input type="text" placeholder='search' style={{outline:"none",border:"none"}} onChange={(e)=>handleData(e)}></input>
                
//                 </div>
//                 <button className='btn btn-outline-dark'>Submit</button>
//             </center>
//         {sample}
//         </div>
//     )
// }
