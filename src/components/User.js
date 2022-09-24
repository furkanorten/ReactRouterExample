import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function User() {

  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
        <h3>User Detail</h3>
        {loading && <h3>Loading...</h3>}
        {!loading &&
            <div>
                    <p><span style={{fontWeight:'bold'}}>Name: </span> {user.name}</p>
                    <p><span style={{fontWeight:'bold'}}>Username: </span> {user.username}</p>
                    <p><span style={{fontWeight:'bold'}}>Email: </span> {user.email}</p>
                    <p><span style={{fontWeight:'bold'}}>Phone: </span> {user.phone}</p>
                    <p><span style={{fontWeight:'bold'}}>Website: </span> {user.website}</p>
                    {id>1 && <Link to={`/users/${parseInt(id)-1}`}>Previous User</Link>}
                    <span style={{fontWeight:'bold', marginLeft:'10px', marginRight:'10px', color:'blue'}}>User{id}</span>
                    {id<10 && <Link to={`/users/${parseInt(id)+1}`}>Next User</Link>}
            </div>
        }

    </div>
  )
}

export default User