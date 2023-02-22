import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

//Main Menu
export default function Home() {
  return (
    <div>
      <h3>Welcome to</h3>
      <h1>Chatter!</h1>

      <form>
        <Link href={'/login'}>
          <button>Log in!</button>
        </Link>

        <Link href={'/about'}>
          <button>About Page</button>
        </Link>
      </form>
    </div>
  )
}
