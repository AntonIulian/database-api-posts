import React, { useEffect, useState } from 'react';
import { useParams, useRevalidator } from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';

function Posts() {
    const {id} = useParams()
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchId, setSearchId] = useState(id)

    function onSearch() {
            console.log(searchId);

            fetchUser(searchId)
    }

    async function fetchUser(userId) {
        setLoading(true)
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`)
        console.log(data);
        setUser(data)
        setLoading(false)
        
        
    }
    
    
    useEffect(() => {
        setTimeout(() => {
            
            
            
            fetchUser()
        }, 2000);
        
    }, [])
    
    
    
    
    return (
        <>
        <div className="post__search">
            <Link to='/'>
                <button>← Back</button>
            </Link>
             <div className="post__search--container">
                 <label className="post__search--label">
                     Search by Id
                 </label>
                 <input type="number" value={searchId} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        onSearch()
                    } 
                 }} onChange={(e) => setSearchId(e.target.value)}/>
                 <button onClick={() => onSearch()  }>Enter</button>
             </div>
         </div>
{loading === true ? 
new Array(10).fill(0).map(() => (
    
    
    (<div className="post">
             <div className="post__title">Loading...</div>
             <p className="post__body">Loading...</p>
         </div> )
                ))
                
                : 
    (
        user.map(user => (
            <>        
         <div className="post">
             <div className="post__title">{user.title}</div>
             <p className="post__body">{user.body}</p>
         </div>
          
            </>
            ))
            )}
             </>

);
}


export default Posts;