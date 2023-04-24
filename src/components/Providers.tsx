'use client'


import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidesProps {
    children: React.ReactNode
}

const Provides: FC<ProvidesProps> = ({children}) => {
  return <>
  <Toaster position="top-center" reverseOrder={false} />
  {children}
  
 </>
}

export default Provides