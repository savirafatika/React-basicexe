import logo from './logo.svg';
import './App.css';
import Content from './component/Content'

function Header(props) {
  return (
    <div>
      This is header
      <div>This is sub header -- {props.subHeader} </div> 
    </div>
  )
}

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
    </div>
  )
}

export default App;

// component dapat disimpan ke dalam fungsi / semua didalam fungsi bisa disebut component
// pada 1 fungsi hanya bisa returning 1 component, jika > 1 component dimasukkan saja kedalam component menjadi subcomponent contoh seperti fungsi Header
// Props = “model” data yang memiliki fungsi ganda yaitu selain untuk menyimpan data, Props juga berfungsi untuk “melempar data” antar components view jika ada perubahan data di state.
// state = variabel / properti
// tulis param "props" untuk mendefinisikan props subHeader di dalam component
// nama props dapat diisi dengan nilai dinamis, contoh seperti subHeader={"this is sub header ..."}
// props bisa diiberi kondisi percabangan, bisa didalam component yg di return atau bisa diluar return
// jika memanggil component diluar file ini import dulu nama filenya lalu baru panggil nama component nya 