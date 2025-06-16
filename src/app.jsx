import { BrowserRouter } from "react-router";
import { AuthedRoutes } from "./routes/AuthedRoutes";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <AuthedRoutes />
    </BrowserRouter>
  );
}
export default App;
