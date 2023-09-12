import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import ShowUsers from './components/ShowUsers';
import CreateUser from './components/CreateUser';
import UpdateUserInfo from './components/UpdateUserInfo';
import ShowUserDetails from './components/ShowUserDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import { Register } from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <Router>
      <Header />
      <div className="container-fluid main-layout">
        <div className="aside">
          <div className="tab">
            <div className="bubble">Personel</div>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/' element={<ShowUsers />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/edit-user/:id' element={<UpdateUserInfo />} />
            <Route path='/show-user/:id' element={<ShowUserDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
