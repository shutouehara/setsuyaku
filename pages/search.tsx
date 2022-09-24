import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/SubPageLayout.module.css';

const Search: NextPageWithLayout = () => {
  return (
    <Layout>
      <Head>
        <title>安いの探す‼️　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className={`pb-5 mb-5 d-grid gap-2 text-center ${styles.search_board}`}>
          <h2>安いの探す</h2>
          <p>商品名で探す</p>
          <input className='border-white rounded px-1' type="text" placeholder='アタック, イクラ, 浮き輪など' />
          <input className='border-white rounded bg-transparent w-50 mx-auto'type="submit" value="検索" />
          <p className='mt-4'>商品タグ名で探す</p>
          <input className='border-white rounded px-1' type="text" placeholder='洗剤, 海鮮, おもちゃなど' />
          <input className='border-white rounded bg-transparent w-50 mx-auto'type="submit" value="検索" />
        </div>

        <h2 className='text-center'>最近の安いやつ</h2>
        <ul className='ps-0'>
          <li className='list-unstyled my-4'>
            <Link href="">
              <div className="card bg-transparent border border-white">
                <div className="card-body">
                  <h3 className="card-title">アタック</h3>
                  <h4 className="card-subtitle mb-2 fs-6">￥215</h4>
                  <p className="card-text">購入場所：ドラッグイレブン</p>
                  <p className="card-text">タグ：洗剤</p>
                  <p className="card-text">登録日：2022/9/12</p>
                  <p className="text-end">詳しくみる</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='list-unstyled my-4'>
            <Link href="">
              <div className="card bg-transparent border border-white">
                <div className="card-body">
                  <h3 className="card-title">いくら</h3>
                  <h4 className="card-subtitle mb-2 fs-6">￥300</h4>
                  <p className="card-text">購入場所：マックスバリュ</p>
                  <p className="card-text">タグ：海鮮</p>
                  <p className="card-text">登録日：2022/9/11登録</p>
                  <p className="text-end">詳しくみる</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='list-unstyled my-4'>
            <Link href="">
              <div className="card bg-transparent border border-white">
                <div className="card-body">
                  <h3 className="card-title">浮き輪</h3>
                  <h4 className="card-subtitle mb-2 fs-6">￥1,150</h4>
                  <p className="card-text">購入場所：Sanki</p>
                  <p className="card-text">タグ：おもちゃ</p>
                  <p className="card-text">登録日：2022/9/10</p>
                  <p className="text-end">詳しくみる</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="text-center my-5">
          <button className='border-white rounded bg-transparent w-50 mx-auto'>もっと見る</button>
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Search;