import { Route, Routes } from "react-router-dom"
import Users from "./Users"


const routerUser = () => {
  return (
    <Routes>
        <Route path='' element={<Users/>} />
        <Route path='login' element={<p>login</p>} />
        <Route path='logout' element={<p>log out</p>} />
    </Routes>
  )
}

export default routerUser