import { useSelector } from "react-redux";
import RightSideNav from "./RightSideNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  const textColor = useSelector((store) => store.appTheme.textColor);

  return (
    <div
      style={{ backgroundColor: `${mode}`, color: `${textColor}` }}
      className="md:flex min-h-screen"
    >
      <Outlet />
      <RightSideNav />
    </div>
  );
};

export default Home;
