import React, { useState } from "react";
import { ShoppingListType } from "../types";

type Props = {
  list:ShoppingListType[]
  setList: React.Dispatch<React.SetStateAction<ShoppingListType[]>>
}

const AddItem:React.FC<Props> = ({list, setList}) => {
  const [product, setProduct] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const handleInputProduct = (e:React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
  };
  const handleInputMemo = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const addList = () => {
    const itemList:ShoppingListType[] = list.concat();
    const newItem: ShoppingListType = {
      id:itemList.length + 1,
      product:product,
      memo:memo,
      done:false,
      date:new Date().toLocaleString(),
    };
    itemList.unshift(newItem);
    localStorage.setItem('setsuyaku_shopping_list', JSON.stringify(itemList));
    setList(itemList);
    setProduct('');
    setMemo('');
  }
  return (
    <div>
      <p className='mb-0'>商品名を入力してください</p>
      <input type="text" onChange={handleInputProduct} value={product} className="w-100 mb-3" required />
      <p className='mb-0'>備考を入力してください</p>
      <textarea rows={4} onChange={handleInputMemo} value={memo} className="w-100 mb-3" />
      <button onClick={addList} disabled={!product && !memo}>登録</button>
    </div>
  )
}

export default AddItem;