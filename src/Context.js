import React, { useState } from 'react'
import { useContext } from 'react'
export const dataprovider = React.createContext()
export function useProduct(){
  return useContext(dataprovider)
}


export function Context({ children }) {
 
  return (
    <dataprovider.Provider value="rudra">
      {children}
    </dataprovider.Provider>
  )
}
