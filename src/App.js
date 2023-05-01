import Login from "./pages/Login/Login";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import UserEvents from "./pages/UserEvents/UserEvents";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Login/>}/>    
    <Route path="/register" element={<Register/>}/>    
    <Route path="/home" element={<Home/>}/>    
    <Route path="/user_events" element={<UserEvents/>}/>    
    
    </Routes>
    </BrowserRouter>
  )
}