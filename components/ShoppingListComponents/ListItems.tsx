import React from 'react';
import { ShoppingListType } from '../types';
import styles from '../../styles/ShoppingList.module.css';

type Items = {
  item: ShoppingListType
  handleDone: (item:ShoppingListType) => void
  handleDelete: (item:ShoppingListType) => void
}

const ListItem:React.FC<Items> = ({item, handleDone, handleDelete}) => {
  return (
    <li id={String(item.id)} className={`d-grid gap-3 border border-white rounded p-3 mb-5${item.done? ' done' : ''}`}>
      <h3>{String(item.product)}</h3>
      <p>{String(item.memo)}</p>
      <p className="text-muted">登録：{item.date}</p>
      <div className="d-flex justify-content-between">
        <p><span>購入済</span><input type="checkbox" onClick={()=> handleDone(item)} defaultChecked={item.done} /></p>
        <button onClick={()=> handleDelete(item)} className="btn text-white-50 border border-gray rounded p-1">削除</button>
      </div>
    </li>
  )
}

export default ListItem;