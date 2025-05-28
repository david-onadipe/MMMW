
import '../index.css'
import Footer from '../components/footer/footer'
import Navbar from '../components/Header/navbar'
import Contactbar from '../components/Header//contactbar'
import PurpleDown from '../components/Spacers/purple-spacer-down'

export const metadata = {
  title: 'MyMarriageMustWork',
  description: 'My App is a...',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Delius&display=swap" rel="stylesheet"></link>
        
      </head>
      <body>
        <Contactbar />
        <Navbar />
        <div id="root">{children}</div>
        <PurpleDown/>
        <Footer />

      </body>
      {/* <script src="https://kit.fontawesome.com/3798a3c2d9.js" crossorigin="anonymous"></script> */}
    </html>
  )
}