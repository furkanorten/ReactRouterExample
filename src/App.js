import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';

function App() {

  let activeStyle = {
    backgroundColor: 'blue',
    color: "white",
    textDecoration: 'none'
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
