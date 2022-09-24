import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <Layout>
      <Head>
        <title>このアプリについて　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className="pb-5 mb-5 d-grid gap-2">
          <h1 className='text-center'>このアプリについて</h1>
          <h2 className='text-center fs-4 mt-4'>管理者</h2>
          <p>アプリの管理者は、次の者です。<Link href="https://shutouehara.com/profile">https://shutouehara.com/profile</Link></p>
          <p>普段はサイト制作などを行なっています。</p>
          <h2 className='text-center fs-4 mt-4'>目的</h2>
          <p>このアプリは、最安商品を店舗毎に比較し、買い物に役立てるために制作しました。</p>
          <p>ぜひ、お得だった商品とその価格を保存してください。</p>
          <h2 className='text-center fs-4 mt-4'>プライバシー保護方針について</h2>
          <p>プライバシー保護方針については、<Link href="/privacypolicy">プライバシーポリシー</Link>にて記載しています。</p>
          <p>登録されるデータや個人情報を、アプリの運用以外で利用することはありません。</p>
          <p>今後データの利用などについて変更があれば、適宜プライバシーポリシーにて告知します。</p>
          <h2 className='text-center fs-4 mt-4'>利用規約について</h2>
          <p>このアプリ内では、複数の利用者によって利用されることを想定しています。</p>
          <p>他の利用者様へご迷惑をかけないためにも、<Link href="/disclaimer">利用規約</Link>を遵守いただきますようよろしくお願いいたします。</p>
        </div>
      </SubLayout>
    </Layout>
  )
}

export default About;