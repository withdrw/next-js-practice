
import { Inter } from 'next/font/google'
import Navbar from '@/pages/[Navbar]'

const inter = Inter({ subsets: ['latin'] })

export default function Home(search) {
  return (
    <>
    <ul>
      <h1>
        This is the home page 
      </h1>
    </ul>
    </>
  )
}
