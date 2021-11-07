import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/actionuser'
import UserCard from './UserCard'

const UserList = () => {
    const {users,loading} = useSelector(state => state.alluser)
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])

return (
    <div style={{marginLeft:"300px",marginRight:"100px" ,marginTop:"50px", display:"flex",flexWrap:"wrap"}}>

        {
            loading?<h1>loading...</h1>:
            users.map((user,i)=><UserCard user={user} key={i}/>)
        }
    </div>
)}

export default UserList
