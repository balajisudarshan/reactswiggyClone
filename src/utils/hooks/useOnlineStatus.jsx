import React from 'react'
import { useState,useEffect } from 'react'
const useOnlineStatus = () => {
  const [status,setStatus] = useState(navigator.onLine)
  useEffect(() => {
    window.addEventListener('online',()=>{
      setStatus(true)
    })
    window.addEventListener('offline',()=>{
      setStatus(false)
    })
    return()=>{
      window.removeEventListener('online',()=>{
        setStatus(true)
      })
      window.removeEventListener('offline',()=>{
        setStatus(false)
      })
    }
  },[status])
  return status  
  
  
}

export default useOnlineStatus
