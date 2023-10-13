
import Layout from '@/components/Layout'

import '@/styles/globals.css'
import React from 'react'
import { motion } from "framer-motion";
const App = ({ Component, pageProps }) => {
  return (
    <>
     
        
     
        <Component {...pageProps} />
    
    </>
  )
}

export default App