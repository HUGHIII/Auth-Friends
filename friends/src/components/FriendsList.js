import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';



const FriendsList = props => {
    const [friends, setfriends] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token');
    axiosWithAuth()
    .get('/api/friends')
     .then(res=>{
         console.log(res)
         setfriends(res.data);
     })
     .catch(err=>console.log(err,'errrrooooorrrrrr'))
    }, [])

    return (
        <>
            {friends.map(e=>{
                return (
                    <div className='friendsCard' key ={e.id}>
                <h2>{e.name}</h2>
                <h3>{e.age}</h3>
                <h3>{e.email}</h3> 
                 </div>
                )
            })}
      </>

    )
}

export default FriendsList