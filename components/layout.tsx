import type { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, authState } from '../pages/api/firebase';
import SignOut from './SignOut';

export default function Layout({ children }: { children?: ReactNode}) {
  const [user, loading, error] = useAuthState(authState);
  const userState = () => {
    if(loading) {
      return '';
    }
    if(error) {
      return <p>error</p>
    }
    if(user) {
      return <SignOut />;
    }
    return <SignIn />
  }
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
        {/* {user ? <SignOut /> : <SignIn />} */}
        {/* {userState()} */}
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