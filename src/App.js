import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Agencies from "./Pages/Agencies";
import LoginRegister from "./LoginRegister";
import Dash from "./Dash";
import Home from "./Pages/Home";
import Button from "./Pages/Button";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Tracking from "./Pages/Tracking";
import Templates from "./Pages/Templates";
import BookDemo from "./Pages/BookDemo";
import Views from "./Pages/Views";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/bookdemo" element={<BookDemo />} />
          <Route path="/views" element={<Views />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/button" element={<Button />} />
          <Route path="/dashlink" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
