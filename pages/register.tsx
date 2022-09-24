import React, { useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/SubPageLayout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Register: NextPageWithLayout = () => {
  return (
    <Layout>
      <Head>
        <title>安いの登録する‼️　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className={`pb-5 mb-5 d-grid gap-2 text-center ${styles.register_board}`}>
          <h2>安いの登録する</h2>
          <p>商品名</p>
          <input type="text" required />
          <p className='mt-4'>金額</p>
          <input type="number" name='price' required />
          <p className='mt-4'>場所（店名）</p>
          <input type="text" required />
          <p className='mt-4'>タグ（洗剤, 海鮮など）</p>
          <input type="text" />
          <p className='mt-4'>いつまで有効</p>
          <input type="date" pattern="\d{4}-\d{2}-\d{2}" />
          <input className='border-white rounded bg-transparent mt-5 w-50 m-auto' type="submit" value="確認" />
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Register;