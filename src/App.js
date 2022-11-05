import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/fontawesome-free/css/fontawesome.css';
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import User from './User';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import {BrowserRouter, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
          <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
         <Routes>
           <Route path="/dashboard" element={<Dashboard/>}></Route>
           <Route path="/users" element={<User/>}></Route>
         </Routes>
         
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
