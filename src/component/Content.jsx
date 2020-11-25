function Content(props) {
   if (props.fillContent) {
      let newFillContent = "new fill content"
      return (
         <div>
            {/* {props.fillContent ? "available" : "unavailable"} */}
            {/* {props.fillContent} */}
            {newFillContent}
         </div>
      )
   } else {
      return null
   }
}

export default Content