import type { AppProps } from 'next/app'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

import Image from 'next/image'
import logoImg from '../assets/logo.svg'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${roboto.variable} bg-gray-900 font-sans text-2xl text-gray-100`}
    >
      <div className="flex min-h-screen flex-col items-start justify-center">
        <header className="mx-auto my-0 w-full max-w-[1180px] px-0 py-8">
          <Image src={logoImg} alt="Ignite Shop" />
        </header>

        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default App
