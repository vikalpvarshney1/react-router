import {useState, useEffect, useContext} from 'react'
import { Link ,Navigate} from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';


export const Users = () => {
  const {isAuth} = useContext(AuthContext);
  const [users, setUsers] =useState([]);
  
useEffect(()=>{
  let isSubscribed = true;
  fetch(`https://reqres.in/api/users?page=2`)
  .then((res) => res.json())
  .then((res) => isSubscribed && setUsers(res.data))
  .catch((err) => console.log(err))

  return () => {
    isSubscribed =false;
  };

},[]);

if(!isAuth){
  return <Navigate to="/login" />
}

  return (
   <table>
<thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>More Details</th>
  </tr>
</thead>
<tbody>
  {users.map((user)=>(
<tr>
<td>{user.first_name}</td>
<td>{user.email}</td>
<td> <Link to={`/users/${user.id}`}>More Details.. </Link> </td>

</tr>

  ))}
</tbody>

   </table>
  )
}

// export  {Users}