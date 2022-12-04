import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    async  function getUsers() {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)

        
        
        
        
    }
    useEffect(() => {
    getUsers()
   }, [])


    return (
        <div>
            <div className="container">
    <div className="row">
      <div className="user-list">
                {users.map((user) => (
                    <div className="user" key={user.id} onClick = {() => navigate(`${user.id}`)} >
          <div className="user-card">
            <div className="user-card__container">

                    
                    <h3>{user.name}</h3>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Phone:</b> {user.phone}</p>
                    <p><b>Website:</b>{user.website}</p>
            </div>
          </div>
        </div>
))}
      </div>
    </div>
  </div>
        </div>
    );
}

export default Home;