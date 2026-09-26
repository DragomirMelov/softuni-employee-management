import Pagination from "./Pagination"
import UserList from "./UserList"
import UserSearch from "./UserSearch"

const MineComponent = () => {
  return (
  <>
   <main className="main">
    <section className="card users-container">
    <UserSearch/>
        <UserList/>

    <Pagination/>
    </section>


    </main>
  </>
  )
}

export default MineComponent