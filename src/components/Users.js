import {NavLink, Route, Routes, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

function Users() {

  let activeStyle = {
    backgroundColor: 'blue',
    color: "white",
    textDecoration: 'none'
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
  }, [])

  return (
    <div>
        <h3>Users</h3>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to={`/users/${user.id}`}>{user.name}</NavLink>
                </li>
            ))}
        </ul>
        <Routes>
            <Route exact path="users" />
            <Route path={`/users/:id`} element={<User />} />
        </Routes>
    <Outlet />
    </div>
   
  )
}

export default Users