import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';
import type { SaiyasItemType, SaiyasuList } from '../components/types';
import styles from '../styles/SubPageLayout.module.css';
import { db } from './api/firebase';
import { collection, query, QuerySnapshot, where } from 'firebase/firestore';
import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import { HtmlProps } from 'next/dist/shared/lib/html-context';

// const postConverter = {
//   fromFirestore(
//     snapshot: firebase.compat.firestore.QueryDocumentSnapshot,
//     options: firebase.firestore.SnapshotOptions
//   ): Post {
//     const data = snapshot.data(options)!;
//     return new Post(data.title, data.author);
//   }
// };

// const itemSnap = db.collection('saiyasu-items')
// .withConverter()
// .orderBy('createdAt')
// .limit(50)
// .doc.get();

// const itemList = itemSnap.data();
// if(itemList !== undefined){
//   itemList.id;
//   itemList.itemName;
//   itemList.price;
//   itemList.shop
//   itemList.effectiveUntil;
//   itemList.category;
//   itemList.createdAt;
// }

const Search: NextPageWithLayout = () => {
  const [items, setItems] = useState<SaiyasItemType[]>([]);
  const [filterItemName, setFilterItemName] = useState<string | number>('');
  const [filterCategory, setFilterCategory] = useState<string>('');
  const getItemsFromFB = () => {
    db.collection('saiyasu-items')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot)=> {
      { /* @ts-ignore */}
      setItems(snapshot.docs.map((doc) => doc.data()));
    });
  }
  useEffect(() => {
    getItemsFromFB();
  },[]);
  const filterByItemName = async () => {
    if(filterItemName != ''){
      const filteredItems:SaiyasItemType[] = [];
      const q = await db.collection('saiyasu-items')
      .where('itemName', 'in', [filterItemName])
      .get();
      q.forEach((postDoc) => {
        { /* @ts-ignore */}
        filteredItems.unshift(postDoc.data());
      });
      setItems(filteredItems);
    }else{
      getItemsFromFB();
    }
  };
  const filterByCategory = async () => {
    if(filterCategory != ''){
      const filteredItems:SaiyasItemType[] = [];
      const q = await db.collection('saiyasu-items')
      .where('category', 'in', [filterCategory])
      .get();
      q.forEach((postDoc) => {
        { /* @ts-ignore */}
        filteredItems.unshift(postDoc.data());
      });
      setItems(filteredItems);
    }else{
      getItemsFromFB();
    }
  };
  return (
    <Layout>
      <Head>
        <title>安いの探す‼️　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className={`pb-5 mb-5 d-grid gap-2 text-center ${styles.search_board}`}>
          <h2>安いの探す</h2>
          <p>商品名で探す</p>
          <input className='border-white rounded px-1' type="text" placeholder='アタック, いくら, 浮き輪など' value={filterItemName} onChange={(e)=> {setFilterItemName(e.target.value)}} />
          <input className='border-white rounded bg-transparent w-50 mx-auto' type="submit" value="検索" onClick={filterByItemName} />
          <p className='mt-4'>商品カテゴリ名で探す</p>
          <input className='border-white rounded px-1' type="text" placeholder='洗剤, 海鮮, おもちゃなど' value={filterCategory} onChange={(e)=> {setFilterCategory(e.target.value)}} />
          <input className='border-white rounded bg-transparent w-50 mx-auto' type="submit" value="検索" onClick={filterByCategory} />
        </div>

        <h2 className='text-center'>最近の安いやつ</h2>
        <ul className='ps-0 list-unstyled'>
          {items.map(({id, itemName, price, shop, effectiveUntil, category, createdAt, others}) => (
            <li key={id} className='py-4' id={id}>
              <div className="card bg-transparent border border-white">
                <div className="card-body">
                  <h3 className="card-title">{itemName}</h3>
                  <h4 className="card-subtitle mb-2 fs-6">￥{price}</h4>
                  <p className="card-text">購入店舗：{shop}</p>
                  <p className="card-text">カテゴリ：{category}</p>
                  <div className="d-flex gap-4">
      { /* @ts-ignore */}
                    <p className="card-text">{`登録日：${new Date(createdAt.seconds *1000).toLocaleDateString()}`}</p>
      { /* @ts-ignore */}
                    {effectiveUntil && <p className="card-text">有効期限：{new Date(effectiveUntil.seconds *1000).toLocaleDateString()}</p>}
                  </div>
                  {others && <p>備考<br/>{others}</p>}
                  <p className="text-end">詳しくみる</p>
                </div>
              </div>
            {/* <Link href={`/items/${id}`}>
            </Link> */}
            </li>
          ))}
        </ul>
        <div className="text-center my-5">
          <button className='border-white rounded bg-transparent w-50 mx-auto'>もっと見る</button>
        </div>
      </SubLayout>
    </Layout>
  )
}

export default Search;