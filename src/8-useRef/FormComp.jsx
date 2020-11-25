import React, { useContext, useEffect, useRef, useState } from 'react'
import { ItemContext } from './Provider'

export default function FormComp() {
   const { dispatch } = useContext(ItemContext)
   const initialState = {full_name: '', age: ''}
   const [formData, setFormData] = useState(initialState)

   const refFullName = useRef()
   const refAge = useRef()
   useEffect(() => {
      refFullName.current.focus()
      // refFullName.current.value = 'Your Full Name'
   }, [])

   useEffect(() => {
      console.log('tes')
   })
   useEffect(() => {
      refAge.current = formData.age
   }, [formData.age])

   const _handleSubmit = (e) => {
      e.preventDefault()
      // console.log(full_name + '--' + age)
      const newItem = {
         id: new Date().getTime().toString(),
         full_name: refFullName.current.value,
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
               <input ref={refFullName} type="text" name="full_name" className="form-control" />
               <small className="form-text text-muted">
                  
               </small>
            </div>
            <div className="form-group">
               <label htmlFor="age">Age</label>
               <input type="text" name="age" value={formData.age} className="form-control" onChange={_handleChange} />
               <small className="form-text text-muted">
                  {refAge.current}
               </small>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
         </form>
      </>
   )
}