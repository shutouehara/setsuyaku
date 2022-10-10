import Link from 'next/link';
import React from 'react'
import { auth } from '../pages/api/firebase';

const SignOut = () => {
  return (
    <div className='d-flex gap-2'>
      <Link href="/mypage">
        <p className='mb-0 p-2 border border-2 rounded fs-6'>マイページ</p>
      </Link>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </div>
  )
}

export default SignOut;