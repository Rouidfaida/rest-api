import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getUser } from '../redux/actionuser'
import Edit from './Edit'


const UserCard = ({user}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '18rem' ,marginBottom:"80px",marginLeft:"20px",backgroundColor:"aliceblue"}}>
  <Card.Body>
<avatar style={{color:"blue", fontStyle:"italic",fontSize:"20px",fontWeight:"400px"}}>{user.name[0]}</avatar>
    <Card.Text>
    {user.name}
           
    </Card.Text>
    <Card.Text>
    {user.email}
    </Card.Text>
    <Card.Text>{user.number}</Card.Text>
           <hr/>
    <Button variant="primary"onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUser())}}>delete</Button>
  </Card.Body>
  <Edit user={user}/>

</Card>
        </div>
    )
}

export default UserCard
