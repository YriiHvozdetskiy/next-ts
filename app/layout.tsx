import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
   title: 'next-ts',
   description: 'Generated by create next app',
}

export default function RootLayout(
   {
      children,
   }: {
      children: React.ReactNode
   }) {
   return (
      <html lang="en">
      <body className={inter.className}>
      {/*<Providers>*/}
      <div className={'flex flex-col min-h-[100%]'}>
         {/*<Header/>*/}
         <main className={'flex-auto flex flex-col'}>
            {children}
         </main>
         {/*<Footer/>*/}
      </div>
      {/*</Providers>*/}
      </body>
      </html>
   )
}
