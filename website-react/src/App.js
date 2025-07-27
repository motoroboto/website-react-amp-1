import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import "./scripts/masthead.js";
import Nav from "./components/navbar.js";
import Main from "./pages/main.js";
import Footer from "./components/footer.js";
import Mixtapes from "./pages/mixtapes.js";
import Halloween from "./pages/halloween.js";
import Christmas from "./pages/christmas.js";
import Mashups from "./pages/mashups.js";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/website-react' element={<Main />} /> */}
        <Route path='/mixtapes' element={<Mixtapes />} />
        <Route path='/mixtapes/halloween' element={<Halloween />} />
        <Route path='/mixtapes/christmas' element={<Christmas />} />
        <Route path='/mashups' element={<Mashups />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
