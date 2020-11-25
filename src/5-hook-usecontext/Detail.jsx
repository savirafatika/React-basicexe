import React, { useContext } from 'react'
import { ItemContext } from './Provider'

export default function Detail({id,full_name,age}) {
   const {_delItem} = useContext(ItemContext)
   return (
      <li className="list-group-item">
         {full_name} ({age})
         <button className="btn btn-danger btn-sm float-right" onClick={() => _delItem(id)}>Delete</button>
      </li>
   )
}