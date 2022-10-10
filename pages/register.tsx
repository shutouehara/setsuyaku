import React, { useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/SubPageLayout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { db } from './api/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const Register: NextPageWithLayout = () => {
  const [itemName, setItemName] = useState<string>('');
  const [price, setPrice] = useState<number | readonly string[]>(0);
  const [shop, setShop] = useState<string>('');
  // const [effectiveUntil, setEffectiveUntil] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState<string>('');
  const [others, setOthers] = useState<string>('');

  // const changeEffectiveUntilState = (v: Date | undefined) => {
  //   !v && setEffectiveUntil(undefined);
  //   v && setEffectiveUntil(v);
  // };

  const submitSaiyasu = async () => {
    try {
      const itemRef = await db.collection('saiyasu-items').add({
          id: Number(String(Date.now()) + String(Math.floor( Math.random() * 1001 ))),
          itemName: itemName,
          price: price,
          shop: shop,
          place: '',
          effectiveUntil: '',
          category: category,
          registeredBy: '',
          createdAt: new Date(),
          like: 0,
          more: 0,
          bad: 0,
          others: others,
          about: '',
      });

      const itemDoc = await itemRef.get();
      setItemName('');
      setPrice(0);
      setShop('');
      // setEffectiveUntil(undefined);
      setCategory('');
      setOthers('');
      console.log(itemDoc);
    } catch (err) {
      console.log(`Error: ${JSON.stringify(err)}`);
    }
  };

  // const itemsRef = doc(collection(db, 'saiyasu-items'));
  // const data = {
  //   id: Number(String(Date.now()) + String(Math.floor( Math.random() * 1001 ))),
  //   itemName: 'item',
  //   price: 580,
  //   shop: 'store',
  //   createdAt: new Date(),
  // };
  // await setDoc(itemsRef, data);
  // const docRef = await addDoc(collection(db, 'saiyasu-items'), {
  //   id: Number(String(Date.now()) + String(Math.floor( Math.random() * 1001 ))),
  //   itemName: 'item',
  //   price: 580,
  //   shop: 'store',
  //   createdAt: new Date(),
  // });
  // console.log('Document written with ID: ', docRef.id);
  const helpTextClass = itemName && price && shop ? `d-none` : `text-center mb-0`;
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
          <input type="text" value={category} onChange={(e)=> {setCategory(e.target.value)}} />
          {/* <p className='mt-4 mb-0'>いつまで有効</p>
          <input type="date" pattern="\d{4}-\d{2}-\d{2}" value={effectiveUntil} onChange={(e)=> {changeEffectiveUntilState(e.target.value)}} /> */}
          <p className="mt-4 mb-0">備考</p>
          <textarea value={others} onChange={(e)=> {setOthers(e.target.value)}} className='mb-5' />
          <p className={ helpTextClass }>商品名・金額・店舗は入力必須です</p>
          <input className='border-white rounded bg-transparent w-50 m-auto' type="submit" value="確認" disabled={!itemName || !price || !shop} onClick={submitSaiyasu} />
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Register;