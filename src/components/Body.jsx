import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const openSideBar = useSelector((store) => store.app.openSideBar);

  return (
    <div className="flex">
      {openSideBar && <SideBar />}

      <Outlet />
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
