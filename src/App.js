import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Data from './Body';
import Layout from './Layout'
import NoPage from './NoPage'
import Contact from './Contact'
let App = (props)=> {
 let navigate=useNavigate();
    return (
      <div>
       <Header></Header>
       <Routes>
        <Route path='/' element={<Home navigate={navigate}></Home>}></Route>
        <Route path="/data" element={<Data></Data>}></Route>
        <Route path="/layout" element={<Layout></Layout>}></Route>
        <Route path="/Nopage" element={<NoPage></NoPage>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
       </Routes>
      </div>
    )
  
}
export default App;


