import "./App.css";
import AppRoutes from "./routes/routes";
import { LoadingProvider } from "./context/LoadingContext";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  

  return (
    <>
      <LoadingProvider>
        <GlobalLoader />
        <AppRoutes />
      </LoadingProvider>
    </>
  );
}

export default App;
