import React, { useContext } from 'react'
import { ItemContext } from './Provider'

export default function Detail({id,full_name,age}) {
   const {dispatch} = useContext(ItemContext)
   return (
      <li className="list-group-item">
         {full_name} ({age})
         <button className="btn btn-danger btn-sm float-right" onClick={() => dispatch({type: 'HAPUS_ITEM', payload: id})}>Delete</button>
      </li>
   )
}