
import { Inter } from 'next/font/google'
import Script from "next/script";
import './globals.css'
// import { useEffect } from 'react'
import storeDefault from './redux/stores/store'
import Providers from './redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Wave ',
  description: 'Collaborative codebase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <style>
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
      </style> */}
       <Script id="custom-script" strategy="afterInteractive">
          {`
            
            function removeUser(a){
              // if(confirm('Are you sure to remove this user?)){
                // const newSocket = io('http://192.168.26.145:3003');
                // newsocket.emit('removeuser', {userid:connId});
              document.getElementById(a).remove();
              // }
            };
          `}
        </Script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <div className=' font-sans'>
          
          <Providers store={storeDefault} children={children}/>
            {/* {children} */}
          {/* </Providers> */}
        </div>
       
      </body>
    </html>
  )
}
