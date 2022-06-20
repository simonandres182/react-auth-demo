import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      <ResponsiveAppBar
           pages={[
            { label: "Home", path: "/" },
            { label: "Login", path: "/login" }
          ]}
        />
      {outlet}
    </div>
  );
};
