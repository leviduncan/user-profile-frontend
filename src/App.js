import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import ShowUsers from './components/ShowUsers';
import CreateUser from './components/CreateUser';
import UpdateUserInfo from './components/UpdateUserInfo';
import ShowUserDetails from './components/ShowUserDetails';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowUsers />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/edit-user/:id' element={<UpdateUserInfo />} />
          <Route path='/show-user/:id' element={<ShowUserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
