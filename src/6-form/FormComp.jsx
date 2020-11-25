import React, { useContext, useState } from 'react'
import { ItemContext } from './Provider'

export default function FormComp() {
   const { _addData } = useContext(ItemContext)

   const [full_name, setFullName] = useState('')
   const [age, setAge] = useState('')

   const _handleSubmit = (e) => {
      e.preventDefault()
      console.log(full_name + '--' + age)
      const newItem = {
         id: new Date().getTime().toString(),
         full_name,
         age
      }
      _addData(newItem)
      setFullName('')
      setAge('')
   }

   return (
      <>
         <form onSubmit={_handleSubmit}>
            <div className="form-group">
               <label htmlFor="name">Full Name</label>
               <input type="text" name="full_name" value={full_name} className="form-control" onChange={(e) => setFullName(e.target.value)} />
               <small className="form-text text-muted">
                  
               </small>
            </div>
            <div className="form-group">
               <label htmlFor="age">Age</label>
               <input type="text" name="age" value={age} className="form-control" onChange={(e) => setAge(e.target.value)} />
               <small className="form-text text-muted">

               </small>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
         </form>
      </>
   )
}