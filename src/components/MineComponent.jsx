import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import UserList from "./UserList"
import UserSearch from "./UserSearch"

const MineComponent = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
      fetch("https://rjtnfvtkiyfclokqlqkk.supabase.co/rest/v1/Users",{
        headers:{
          'apikey': "sb_publishable_560O2fA7Bh02quGxqDYiUA_biZ2Zjwp"
        }
      }).then(res => res.json()).then(data => setUser(data)).catch(error => console.error(`Error fetching ${error}`));
    },[])

    console.log(user)
  return (

  <>
   <main className="main">
    <section className="card users-container">
    <UserSearch/>
        <UserList user={user}/>
      {/* New user button  */}
      <button className="btn-add btn">Add new user</button>
    <Pagination/>
    </section>


    </main>
  </>
  )
}

export default MineComponent