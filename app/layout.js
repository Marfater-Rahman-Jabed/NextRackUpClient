import Footer from './Component/Footer/Footer'
import NavBar from './Component/navBar/navBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RackUp',
  description: 'RackUp IT Solution Ltd. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
