import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//const Login = React.lazy(() => "../Pages/Login");
const AppNavigation = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<></>}
          />
        </Routes>
      </Suspense>
    </>
  );
};
export default AppNavigation;
