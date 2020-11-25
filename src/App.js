// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Content from './component/Content'

function Header(props) {
  return (
    <div>
      This is header
      <div>This is sub header -- {props.subHeader} </div> 
    </div>
  )
}

class Footer extends React.Component{
  constructor(props){
    // contoh penggunaan state di class component
    super(props)
    this.state = {
      year: 0
    }
  }
  render() {
    if (this.props.year < 2020) {
      return null
    } else {
      return (
        <div>
          this is footer page -- {this.props.fillFooter}
          <div>{this.props.year + 2}</div>
          {/* <div>{this.state.year + this.props.year}</div> */}
          <div>{this.state.year}</div>
          <div>
              <button onClick={() => this.setState({year: 2025})}>click me</button>
          </div>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div className="App">
      <h3>This is my first react app</h3>
      {/* contoh pemanggilan component header dan content */}
      {/* <Header /> */}
      {/* contoh pemanggilan nama props */}
      <Header subHeader={"this is sub header from props"} />
      <Header subHeader={"this is sub header from props 2"} />
      <Content fillContent={"this is from props fillContent"} />
      <Footer fillFooter={"this is from props in class Footer"} year={2020} />
    </div>
  )
}

export default App;



// function Content(props) {
//   if (props.fillContent) {
//     let newFillContent = "new fill content"
//     return (
//       <div>
//         {/* {props.fillContent ? "available" : "unavailable"} */}
//         {/* {props.fillContent} */}
//         {newFillContent}
//       </div>
//     )
//   } else {
//     return null
//   }
// }

// functional component & Props:
// component dapat disimpan ke dalam fungsi / semua didalam fungsi bisa disebut component
// pada 1 fungsi hanya bisa returning 1 component, jika > 1 component dimasukkan saja kedalam component menjadi subcomponent contoh seperti fungsi Header
// Props = “model” data yang memiliki fungsi ganda yaitu selain untuk menyimpan data, Props juga berfungsi untuk “melempar data” antar components view jika ada perubahan data di state.
// state = variabel / properti
// tulis param "props" untuk mendefinisikan props subHeader di dalam component
// nama props dapat diisi dengan nilai dinamis, contoh seperti subHeader={"this is sub header ..."}
// props bisa diiberi kondisi percabangan, bisa didalam component yg di return atau bisa diluar return
// jika memanggil component diluar file ini import dulu nama filenya lalu baru panggil nama component nya 

// class component & state:
// pada class component tidak bisa langsung returing component, sebelumnya lakukan dulu render(){ return(...) }
// memanggil props pada class menggunakan this, contoh nya ada pada class Footer this.props.fillFooter
// state bisa dimasukkan dalam constructor
