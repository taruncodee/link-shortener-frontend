import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-8 bg-gradient-to-bl from-red-600 to-orange-400 p-8">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
