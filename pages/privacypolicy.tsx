import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';

const Privacy: NextPageWithLayout = () => {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシー　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className="pb-5 mb-5 d-grid gap-2">
          <h1 className='text-center'>セツヤク‼️の<br />プライバシーポリシー</h1>
          <h2 className='text-center fs-4 mt-4'>個人情報の定義</h2>
          <p>個人情報とは、個人情報保護法で指す「個人情報」のことです。メールアドレス、SNS情報、その他特定の個人を識別できる情報のことと定義します。</p>
          <h2 className='text-center fs-4 mt-4'>個人情報をFirebaseを利用して収集・保管します</h2>
          <p>このアプリでは、Googleのデータベースシステムである「Firebase」を利用し、ユーザーの情報およびその他の登録情報を収集、保管しています。その他のシステムなどを利用しません。</p>
          <h2 className='text-center fs-4 mt-4'>個人情報はユーザーの利便性を目的として利用します</h2>
          <p>個人情報は、主にユーザーのログインなどのために利用します。</p>
          <h2 className='text-center fs-4 mt-4'>利用目的の変更</h2>
          <p>このアプリのシステム改善や修正などに応じて、利用目的を変更する場合があります。しかし、変更後も個人情報を商業的利用することや外部への提供などは行いません。</p>
          <h2 className='text-center fs-4 mt-4'>個人情報の第三者への提供はありません</h2>
          <p>アプリ内で扱われる個人情報を、第三者へ提供することはありません。このアプリのサービス運営のみを目的として、個人情報は利用されます。</p>
          <h2 className='text-center fs-4 mt-4'>個人情報を訂正、および削除することがあります</h2>
          <p>ユーザーの誤操作などにより登録された個人情報を、必要に応じて訂正、及び削除することが考えられます。</p>
          <h2 className='text-center fs-4 mt-4'>個人情報を利用停止することがあります</h2>
          <p>他のユーザーへの迷惑行為が確認された場合、また、このアプリ内の運営に支障をきたすと判断した場合は、登録された個人情報並びにユーザーアカウントを利用停止にすることがあります。</p>
          <h2 className='text-center fs-4 mt-4'>プライバシーポリシーを変更することがあります</h2>
          <p>このプライバシーポリシーは、アプリのシステム改善、修正などに応じて、プライバシーポリシーを変更することがあります。ご了承ください。</p>
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Privacy;