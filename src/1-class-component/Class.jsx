import React, { Component, Fragment } from 'react'

export default class Class extends Component {
   constructor(props) {
      super(props)
      this.state = {
         counter: 0,
      }
   }

   componentDidMount() {
      // untuk fetch data dari api
      setTimeout(() => {
         this.setState({counter: this.state.counter + 1})
         console.log('componentDidMount')
      }, 3000);
   }

   componentDidUpdate() {
      console.log('componentDidUpdate')
      alert('ada perubahan state')
   }

   render(){
      return(
         <Fragment>
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <h1>Life Cycle</h1>
                     <span className="badge badge-primary">{this.state.counter}</span>
                     {
                        this.state.counter === 0 ?
                        <Unmount /> : null
                     }
                  </div>
               </div>
            </div>
         </Fragment>
      )
   }

}

class Unmount extends Component{
   componentWillUnmount() {
      console.log('componentWillUnmount')
   }
   render() {
      return(
         <div>Unmount</div>
      )
   }
}