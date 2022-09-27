import React, { useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/SubPageLayout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Register: NextPageWithLayout = () => {
  const [itemName, setItemName] = useState<string>('');
  const [price, setPrice] = useState<number | undefined>(0);
  const [shop, setShop] = useState<string>('');
  // const setPriceEvent = (e:number):void => {
  //   if(!(e.target instanceof HTMLInputElement)) {
  //     return;
  //   }
  //   setPrice(e.target.value);
  // }
  return (
    <Layout>
      <Head>
        <title>安いの登録する‼️　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className={`pb-5 mb-5 d-grid gap-2 text-center ${styles.register_board}`}>
          <h2>安いの登録する</h2>
          <p className="mb-0">商品名</p>
          <input type="text" value={itemName} onChange={(e)=> {setItemName(e.target.value)}} required />
          <p className='mt-4 mb-0'>金額</p>
          <input type="number" name='price' value={price} onChange={(e)=> {setPrice(Number(e.target.valueAsNumber))}} required />
          <p className='mt-4 mb-0'>店舗</p>
          <input type="text" value={shop} onChange={(e)=> {setShop(e.target.value)}} required />
          <p className='mt-4 mb-0'>タグ（洗剤, 海鮮など）</p>
          <input type="text" />
          <p className='mt-4 mb-0'>いつまで有効</p>
          <input type="date" pattern="\d{4}-\d{2}-\d{2}" />
          <input className='border-white rounded bg-transparent mt-5 w-50 m-auto' type="submit" value="確認" disabled={!itemName || !price || !shop} />
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Register;