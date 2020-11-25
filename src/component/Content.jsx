import React,{useState} from 'react'

function Content(props) {
   // contoh penggunaan state di functional component
   const [year, setYear] = useState(0)
   if (props.fillContent) {
      let newFillContent = "new fill content"
      return (
         <div>
            {/* {props.fillContent ? "available" : "unavailable"} */}
            {/* {props.fillContent} */}
            {`${newFillContent} ${year}`}
            <div>
               <button onClick={() => setYear(2025)}>click me</button>
            </div>
         </div>
      )
   } else {
      return null
   }
}

export default Content