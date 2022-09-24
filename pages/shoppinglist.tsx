import Layout from '../components/layout';
import Head from 'next/head';
import SubLayout from '../components/subPageLayout';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/SubPageLayout.module.css';
import { ShoppingListType } from '../components/types';
import { useEffect, useState } from 'react';
import ListItem from '../components/ShoppingListComponents/ListItems';
import AddItem from '../components/ShoppingListComponents/AddItem';

const dummyData = [
  {
    id: 1,
    product: "いくら（例）",
    memo: "来週必要。（入力例です。削除してください。）",
    done: false,
    date: "2022/9/23 18:58:18",
  },
  {
    id: 0,
    product: "アタック（例）",
    memo: "200円ぐらいの見かけた。（入力例です。削除してください。）",
    done: false,
    date: "2022/9/23 18:58:18"
  }
]

const ShoppingList: NextPageWithLayout = () => {
  const [list, setList] = useState<ShoppingListType[]>([]);
  useEffect(() => {
    const local = localStorage.getItem('setsuyaku_shopping_list');
    const localData: ShoppingListType[] = local ? JSON.parse(local) : dummyData;
    setList(localData);
  },[]);

  const handleDone = (item:ShoppingListType):void => {
    const itemList = list.concat();
    const switchedItem = itemList.find(p=>p.id === item.id);
    if(switchedItem != undefined){
      switchedItem.done = switchedItem.done ? false : true;
      localStorage.setItem('setsuyaku_shopping_list', JSON.stringify(itemList));
    }
  };

  const handleDelete = (item:ShoppingListType):void => {
    // const itemList = list.concat();
    const itemList = list.filter(p => p.id !== item.id);
    setList(itemList);
    localStorage.setItem('setsuyaku_shopping_list', JSON.stringify(itemList));
  };

  return (
    <Layout>
      <Head>
        <title>これ買う‼️　セツヤク‼️</title>
      </Head>
      <SubLayout>
        <div className={`pb-5 mb-5 d-grid gap-2 text-center ${styles.register_board}`}>
          <h1>これ買う‼️</h1>
          <section className='my-5'>
            <h2>リストを追加</h2>
            <AddItem list={list} setList={setList} />
          </section>
          <section className='my-5'>
            <h2>一覧</h2>
            <ul className="di-flex justify-content-between my-5">
              { list.map( item => (
                <ListItem
                  key={item.id}
                  item={item}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </section>
        </div>
      </SubLayout>
    </Layout>
  )
}

export default ShoppingList;