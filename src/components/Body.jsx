import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const openSideBar = useSelector((store) => store.app.openSideBar);
  return (
    <div className="flex">
      {openSideBar && <SideBar />}
      <MainContainer />
    </div>
  );
};

export default Body;
