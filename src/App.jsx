import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import TitleCard from "./pages/TitleCard";
import Astro from "./pages/CaseStudies/Astro";
import Motor from "./pages/CaseStudies/Motor";
import TB from "./pages/CaseStudies/TB";
import ToDo from "./pages/CaseStudies/ToDo";
import User from "./pages/CaseStudies/User";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ProgressBar />
      <Routes>
        <Route path="/" element={<TitleCard />} />
        <Route path="/astro" element={<Astro />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/tb" element={<TB />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
