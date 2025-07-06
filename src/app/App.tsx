import AppRoutes from "../routes/routes";
import { AuthProvider } from "./providers";
import "./styles/App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
