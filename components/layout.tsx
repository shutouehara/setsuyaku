import type { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }: { children?: ReactNode}) {
  return (
    <div className='d-flex align-content-stretch flex-wrap' style={{height:'100vh'}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-100 p-3 mb-4 d-flex justify-content-between align-items-center' style={{height:'100px'}}>
        <Link href="/">
          <h1 className='mb-0 p-2 border border-2 rounded fs-5'>セツヤク‼️</h1>
        </Link>
        <Link href="/mypage">
          <p className='mb-0 p-2 border border-2 rounded fs-6 d-none'>マイページ</p>
        </Link>
      </header>

      {children}

      <div className="w-100 mt-2 px-2">
        <footer className='mb-0 py-2 px-3 border-top border-white'>
          <p className='text-center'>&copy;セツヤク‼️</p>
        </footer>
      </div>
    </div>
  )
}