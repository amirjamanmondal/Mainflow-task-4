import Landing from "./component/pages/Landing";
import { Route, Routes } from "react-router-dom";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";

function App() {
  // document.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });

  return (
    <div className="w-screen min-h-screen bg-[url('./assets/background.jpg')] bg-cover bg-no-repeat text-black flex justify-center items-start">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
