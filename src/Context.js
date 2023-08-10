import React, { useState } from 'react'
import { useContext } from 'react'
export const dataprovider = React.createContext()
export function useProduct(){
  return useContext(dataprovider)
}


export function Context({ children }) {
 const [name,setname]=useState()
 const [adharno,setadharno]=useState()
 const [crop,setcrop]=useState()
 const [state,setstate]=useState()
 const [mandalam,setmandalam]=useState()
 const [village,setvillage]=useState()
 const [sachivalayam,setsachivalayam]=useState()
 const details=[
  name,setname,adharno,setadharno,crop,setcrop,state,setstate,mandalam,setmandalam,village,setvillage,sachivalayam,setsachivalayam
 ]
 console.log(name)
  return (
    <dataprovider.Provider value={details}>
      {children}
    </dataprovider.Provider>
  )
}
