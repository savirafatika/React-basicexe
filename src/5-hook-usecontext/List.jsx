import React, { useState } from 'react'
import {data} from '../data'
import Item from './Item'
import { ItemContext } from './Provider'

export default function List() {
   const [item, setItem] = useState(data)
   const _delItem = (id) => {
      const newItem = item.filter((item) => item.id !== id)
      setItem(newItem)
   }

   return (
      <ItemContext.Provider value={{ item, _delItem }}>
      <h1>Throw Props</h1>
      <Item />
      </ItemContext.Provider>
   )
}