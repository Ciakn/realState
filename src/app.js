import axios from "axios";

import NavBar from "./Components/navbar/NavBar";
import { useFetch } from "./hooks/useFetch";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomeContainer from "./Components/Home.jsx";
import HouseProvider, { useHouse } from "./providers/HouseProvider";
import SingleHouse from "./Components/SingleHouse";
import BookMark from "./Components/BookMark";
const App = () => {

  return (
    <HouseProvider>
      <NavBar />
      <Routes>
        <Route index path="" element={<HomeContainer />} />
        <Route path="/singlehouse/:id" element={<SingleHouse />} />
        <Route path="/bookmarks" element={<BookMark />} />
      </Routes>
    </HouseProvider>
  );
};

export default App;
