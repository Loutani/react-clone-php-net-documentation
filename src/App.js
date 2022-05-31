import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Downloads from "./pages/Downloads";
import Documentation from "./pages/Documentation";
import GetInvolved from "./pages/GetInvolved";
import Help from "./pages/Help";
import CurrentVersion from "./pages/CurrentVersion";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="getInvolved" element={<GetInvolved />} />
            <Route path="help" element={<Help />} />
            <Route path="currentVersion" element={<CurrentVersion />} />
          </Routes>

          <Footer />

          <ScrollToTop />
        </>
    );
}

export default App;