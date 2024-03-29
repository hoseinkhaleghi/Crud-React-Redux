// import {ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage/Landingpage";
import Create from "./pages/Crud/Create";
import Edit from "./pages/Crud/Edit";
import Favorite from "./pages/Crud/Favorite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
