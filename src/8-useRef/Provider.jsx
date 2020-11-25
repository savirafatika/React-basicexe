import { createContext, useReducer } from 'react' 
import React from 'react'
import {data} from '../data'

export const ItemContext = createContext()

export default function ItemProvider({children}) {
   // const [item, setItem] = useState(data)
   // const _delItem = (id) => {
   //    const newItem = item.filter((item) => item.id !== id)
   //    setItem(newItem)
   // }

   // const _addData = (newItem) => {
   //    setItem([newItem,...item])
   // }

   const initialState = {item : data}
   const reducer = (state, action) => {
      switch (action.type) {
         case 'HAPUS_ITEM':
            const newItem = state.item.filter((item) => item.id !== action.payload)
            return { item : newItem }
         case 'TAMBAH_DATA':
            return {item: [action.payload,...state.item]}
         default:
            throw new Error()
      }
   }

   const [ListItems, dispatch] = useReducer(reducer, initialState)

   return (
      <ItemContext.Provider value={{ ListItems, dispatch }}>
         {children}
      </ItemContext.Provider>
   )
}
