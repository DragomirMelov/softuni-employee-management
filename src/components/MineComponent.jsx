import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import UserList from "./UserList"
import UserSearch from "./UserSearch"
import CreateEditFormModal from "./CreateEditFormModal"

const MineComponent = () => {
    const [user,setUser] = useState([]);
    const [showSaveUserModal,setShowSaveUserModal] = useState(false)
    useEffect(()=>{
      fetch("https://rjtnfvtkiyfclokqlqkk.supabase.co/rest/v1/Users",{
        headers:{
          'apikey': "sb_publishable_560O2fA7Bh02quGxqDYiUA_biZ2Zjwp"
        }
      }).then(res => res.json()).then(data => setUser(data)).catch(error => console.error(`Error fetching ${error}`));
    },[])

    console.log(user)

    const handleUserAddOrEditModal = () =>{
      setShowSaveUserModal(true)
    }
    const handlerAddOrEditUserModalClose = () =>{
      setShowSaveUserModal(false)
    }
  return (

  <>
   <main className="main">
    <section className="card users-container">
    <UserSearch/>
        <UserList user={user}/>
      {/* New user button  */}
      <button className="btn-add btn" onClick={()=>{handleUserAddOrEditModal()}}>Add new user</button>
      {showSaveUserModal && <CreateEditFormModal onClose={handlerAddOrEditUserModalClose}/>}
    <Pagination/>
    </section>


    </main>
  </>
  )
}

export default MineComponent