import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Leaderboard from "./Components/Leaderboard";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dailypuzzle from "./Components/Dailypuzzle";
import Streamers from "./Components/Streamers";
import Tournament from "./Components/Tournament";

function App() {
  return (
    <div className="App">
      <div className="">
        {/* <Navbar />
        <Home /> */}
        {/* <Leaderboard /> */}
        {/* <Footer /> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/dailypuzzle" element={<Dailypuzzle />}></Route>
            <Route exact path="/streamers" element={<Streamers />}></Route>
            <Route exact path="/leaderboard" element={<Leaderboard />}></Route>
            <Route exact path="/tournament" element={<Tournament />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
