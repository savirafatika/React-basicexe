import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react'
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
            <Input 
               ref={refFullName} 
               label="Full Name"
               name="full_name"
               placeholder="write your full name"
            />
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

const Input = forwardRef(({label, name, placeholder}, ref) => (
   <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input ref={ref} type="text" name={name} placeholder={placeholder} className="form-control" />
      <small className="form-text text-muted">
                  
      </small>
   </div>
))