// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import Link from 'next/link'

export default function Home() {

  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order')
    // router.push('/product')
    router.replace('/product')
  }
  return (
    <div>
      <h1>Hello XXXX</h1>
      <Link href="/blog">
      <a>Blog</a>
      </Link>
      <Link href="/product">
      <a>Products</a>
      </Link>
      <button onClick={handleClick}>
        Place Holder
      </button>
    </div>
  )
}
