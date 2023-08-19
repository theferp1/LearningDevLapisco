import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import BlurProvider from "./provider/BlurProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BlurProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/cadastrar" element={<SignUp />} />
        </Routes>
      </BlurProvider>
    </div>
  );
}

export default App;
