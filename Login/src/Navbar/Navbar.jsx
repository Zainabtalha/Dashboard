
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1 style={{
        color:"Red",
        alignItems:"center",
        textAlign:"center"
      }}>PORTAL</h1>

      <Outlet />
    </div>
  );
};

export default Navbar;