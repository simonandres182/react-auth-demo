import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <ResponsiveAppBar
          pages={[
            { label: "Settings", path: "settings" },
            { label: "Profile", path: "profile" }
          ]}
      />
      {outlet}
    </div>
  );
};
