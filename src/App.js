import { Outlet } from "react-router-dom";
import "./App.css";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
