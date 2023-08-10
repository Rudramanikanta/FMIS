import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import {Context} from './Context';
import Blogs from './Blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcol from './Navbar';
let App = (props)=> {
    return (
      <Context>
        <Navbarcol></Navbarcol>
      <div>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      </div>
      </Context>
    )
  
}
export default App;


