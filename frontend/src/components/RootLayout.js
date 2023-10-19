import { MainNavigation } from "./MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
