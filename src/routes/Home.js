import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
const Home = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default Home;
