import React from 'react'
import { useState } from 'react'
import {data} from '../data'
import Item from './Item'

export default function List() {
   const [item, setItem] = useState(data)
   const _delItem = (id) => {
      const newItem = item.filter((item) => item.id !== id)
      setItem(newItem)
   }
   return (
      <>
      <h1>Throw Props</h1>
      <Item data={item} del={_delItem} />
      </>
   )
}