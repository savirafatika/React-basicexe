import React, { useState } from 'react'
import FormComp from './FormComp'
import Item from './Item'
import ItemProvider from './Provider'

export default function List() {
   const [tambah, setTambah] = useState(false)
   return (
      <ItemProvider>
      <h1>ForwardRef</h1>
      {
         tambah ? <FormComp />:
         <button className="btn btn-primary" onClick={() => setTambah(true)}>Add New Data</button>
      }
      <Item />
      </ItemProvider>
   )
}