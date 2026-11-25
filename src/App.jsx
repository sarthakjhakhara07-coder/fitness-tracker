import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Routines from "./pages/Routines.jsx";
import RoutineDetail from "./pages/RoutineDetail.jsx";
import Calories from "./pages/Calories.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
     
      <Navbar />

    
      <main>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routines" element={<Routines />} />

          
          <Route path="/routines/:id" element={<RoutineDetail />} />

          <Route path="/calories" element={<Calories />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

     
      <Footer />
    </>
  );
}

export default App;
