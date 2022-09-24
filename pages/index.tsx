import React, { useState } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import serchIcon from '/public/search_icon.webp';
import saveIcon from '/public/save_icon.webp';
import addIcon from '/public/add_icon.webp';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>セツヤク‼️　店頭価格共有アプリ</title>
        <meta name="description" content="このアプリは、いろいろな商品の店頭価格を共有するためのアプリです。" />
      </Head>
      <Layout>
        <div className={styles.bg_wrapper}></div>
        <main className={`row fs-2 align-content-between me-auto ${styles.menu_bg}`}>
          <div className={`align-self-center d-flex ${styles.menu_icon_wrapper}`}>
            <Link href="/search">
              <div className='d-flex pe-auto'>
                <p className={`p-3 d-flex align-items-center border border-3 border-dark rounded-circle bg-white me-3 ${styles.menu_icon}`}>
                  <Image
                    src={serchIcon}
                    width={64}
                    height={64}
                    className={styles.menu_icon}
                  />
                </p>
                <p className={`text-center align-self-center lh-sm`}>安いの<br />探す</p>
              </div>
            </Link>
          </div>
          <div className={`align-self-center d-flex justify-content-end ${styles.menu_icon_wrapper}`}>
            <Link href="/register">
              <div className='d-flex pe-auto'>
                <p className={`p-3 d-flex align-items-center border border-3 border-dark rounded-circle bg-white me-3 ${styles.menu_icon}`}>
                  <Image
                    src={saveIcon}
                    width={64}
                    height={64}
                    className={styles.menu_icon}
                  />
                </p>
                <p className={`text-center align-self-center lh-sm`}>安いの<br />登録する</p>
              </div>
            </Link>
          </div>
          <div className={`align-self-center d-flex ${styles.menu_icon_wrapper}`}>
            <Link href="/shoppinglist">
              <div className='d-flex pe-auto'>
                <p className={`p-3 d-flex align-items-center border border-3 border-dark rounded-circle bg-white me-3 ${styles.menu_icon}`}>
                  <Image
                    src={addIcon}
                    width={64}
                    height={64}
                    className={styles.menu_icon}
                  />
                </p>
                <p className={`text-center align-self-center lh-sm`}>これ買う</p>
              </div>
            </Link>
          </div>
        </main>

        <div className="others text-end overflow-hidden w-100 ms-auto mt-5">
          <Link href="/about">
            <div className={`border border-white rounded-pill text-start w-100 px-5 py-3 mb-3 ${styles.extra_menu}`}>
              <p className='mb-0'>このアプリについて</p>
            </div>
          </Link>
          <Link href="/privacypolicy">
            <div className={`border border-white rounded-pill text-start w-100 px-5 py-3 mb-3 ${styles.extra_menu}`}>
              <p className='mb-0'>プライバシーポリシー</p>
            </div>
          </Link>
          <Link href="/disclaimer">
            <div className={`border border-white rounded-pill text-start w-100 px-5 py-3 mb-3 ${styles.extra_menu}`}>
              <p className='mb-0'>規約</p>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  )
}

export default Home;