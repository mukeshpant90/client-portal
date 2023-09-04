import "./App.scss";
import { useAuth } from "./provider/AuthProvider";
import AppNavigation from "./router/AppNavigation";

function App() {
  const auth = useAuth();
  return (
    <>
      <AppNavigation />
    </>
  );
}

export default App;
