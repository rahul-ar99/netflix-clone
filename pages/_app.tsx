import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <div>
    <ul>
      <Link href={'/'}><li>Home</li></Link>
      <Link href={'/about'}><li>About</li></Link>
      <Link href={'/profile'}><li>Profile</li></Link>
      <Link href={'/contact'}><li>Contact</li></Link>
    </ul>
  </div>
  <Component {...pageProps} />
  <div className='absolute bottom-0.5  '>
    <h1>asdfsdf</h1>
  </div>
  </>

}
