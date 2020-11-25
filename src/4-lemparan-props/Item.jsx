import React from 'react'
import Detail from './Detail'

export default function Item({data, del}) {
   return (
      <ul className="List-group">
         {data.map((data) => {
            return (
               <Detail key={data.id} {...data} del={del} />
            )
         })}
      </ul>
   )
}