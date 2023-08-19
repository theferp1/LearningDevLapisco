import Login from "./pages/Login/Login";
import BlurProvider from "./provider/BlurProvider";

function App() {
  return (
    <div className="">
      <BlurProvider>
        <Login />
      </BlurProvider>
    </div>
  );
}

export default App;
