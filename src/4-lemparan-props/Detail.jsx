import React from 'react'

export default function Detail({id,full_name,age,del}) {
   return (
      <li className="list-group-item">
         {full_name} ({age})
         <button className="btn btn-danger btn-sm float-right" onClick={() => del(id)}>Delete</button>
      </li>
   )
}