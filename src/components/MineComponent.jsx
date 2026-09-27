import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import UserList from "./UserList"
import UserSearch from "./UserSearch"
import CreateEditFormModal from "./CreateEditFormModal"
const DatabaseUrl = "https://rjtnfvtkiyfclokqlqkk.supabase.co/rest/v1/Users"
const ApiKey = "sb_publishable_560O2fA7Bh02quGxqDYiUA_biZ2Zjwp"
const MineComponent = () => {
    const [user,setUser] = useState([]);
    const [showSaveUserModal,setShowSaveUserModal] = useState(false)
    useEffect(()=>{
      fetch(DatabaseUrl,{
        headers:{
          'apikey': ApiKey
        }
      }).then(res => res.json()).then(data => setUser(data)).catch(error => console.error(`Error fetching ${error}`));
    },[])




    const handleUserAddOrEditModal = () =>{
      setShowSaveUserModal(true)
    }
    const handlerAddOrEditUserModalClose = () =>{
      setShowSaveUserModal(false)
    }




    const submitUserHandler = (user) =>{
        fetch(DatabaseUrl,{
        method: 'POST',
        headers:{
          'Content-Type':"application/json",
          'apikey': ApiKey
        },body: JSON.stringify(user)
    }).then(() => console.log("User added")).catch(error => console.error(error))
    .finally(()=>{  setShowSaveUserModal(false)})
  }
  return (

  <>
   <main className="main">
    <section className="card users-container">
    <UserSearch/>
        <UserList user={user}/>
      {/* New user button  */}
      <button className="btn-add btn" onClick={()=>{handleUserAddOrEditModal()}}>Add new user</button>
      {showSaveUserModal && <CreateEditFormModal onClose={handlerAddOrEditUserModalClose} onSubmit={submitUserHandler}/>}
    <Pagination/>
    </section>


    </main>
  </>
  )
}

export default MineComponent