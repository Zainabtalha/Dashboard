import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Navbar from "./Navbar/Navbar";
import { Dashboard } from "@mui/icons-material";
import Home from "./Home/Home";
// import Signup from "./Signup/Signup";



const App = () => {
  return (
<Routes>
  <Route path="/"element={<Navbar/>}>
  <Route path="/" element ={<Signup/>}/>
  <Route path="/login" element ={<Login/>}/>
  <Route path="/Home" element ={<Home/>}/>
  </Route>
</Routes>
  );
}

export default App;
