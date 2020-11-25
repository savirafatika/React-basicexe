import React, { useContext, useState } from 'react'
import { ItemContext } from './Provider'

export default function FormComp() {
   const { dispatch } = useContext(ItemContext)
   const initialState = {full_name: '', age: ''}
   const [formData, setFormData] = useState(initialState)

   const _handleSubmit = (e) => {
      e.preventDefault()
      // console.log(full_name + '--' + age)
      const newItem = {
         id: new Date().getTime().toString(),
         full_name: formData.full_name,
         age: formData.age
      }
      dispatch({type: 'TAMBAH_DATA', payload: newItem})
      setFormData(initialState)
   }

   const _handleChange = (e) => {
      console.log(e.target.name)
      const name = e.target.name
      const value = e.target.value
      
      setFormData({...formData, [name] : value})
   }

   return (
      <>
         <form onSubmit={_handleSubmit}>
            <div className="form-group">
               <label htmlFor="name">Full Name</label>
               <input type="text" name="full_name" value={formData.full_name} className="form-control" onChange={_handleChange} />
               <small className="form-text text-muted">
                  
               </small>
            </div>
            <div className="form-group">
               <label htmlFor="age">Age</label>
               <input type="text" name="age" value={formData.age} className="form-control" onChange={_handleChange} />
               <small className="form-text text-muted">

               </small>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
         </form>
      </>
   )
}