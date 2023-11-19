import {Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import LogIn from "../pages/LoginPage"

import SignUp from "../pages/SignUpPage"
import NotesPage from "../pages/NotesPage"
import CreateNote from "../pages/createNotes"
import UpdateNote from "../pages/updateNotes"

export default function  AllRoutes (){
    return <Routes>
        <Route path="/" element={<HomePage/>}>

        </Route>
        <Route path="/user/login" element={<LogIn/>}>

</Route>
<Route path="/signup" element={<SignUp/>}>

</Route>
<Route path="/note" element={<NotesPage/>}>

</Route>

<Route path="/create" element={<CreateNote/>}>

</Route>

<Route path="/update" element={<UpdateNote/>}>

</Route>


    </Routes>
}