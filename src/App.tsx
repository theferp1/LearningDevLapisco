import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import BlurProvider from "./provider/BlurProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <BlurProvider>
          <Route path="/" element={<Login />} />
        </BlurProvider>
        <Route path="/cadastrar" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
