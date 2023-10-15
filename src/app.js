import axios from "axios";

import NavBar from "./Components/navbar/NavBar";
import { useFetch } from "./hooks/useFetch";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomeContainer from "./Components/Home.jsx";
import HouseProvider, { useHouse } from "./providers/HouseProvider";
const App = () => {

  return (
    <HouseProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </HouseProvider>
  );
};

export default App;
