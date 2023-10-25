import axios from "axios";
import React, { Children, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
const BASE_URL = "http://localhost:5000/houses";
const HouseContext = createContext();


function HouseProvider({ children }) {

  const { data, isLoading, } = useFetch("");
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);
  console.log(bookmarks);
  const searchHandler = (value) => {
    console.log(value);
    setFilterData(data)
    if (!value) console.log("Type Something");

    const filteredData = data.filter((item) =>
      item.area.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(filteredData);

  }
  // const BookMarkHandler = async (bookmark) => {
  //   try {
  //     const { data } = await axios.post(`http://localhost:5000/bookmarks`, bookmark);


  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // const getBookMarks = async () => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:5000/bookmarks`);
  //     console.log(data);
  //     setBookMarks(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <HouseContext.Provider value={{ data, isLoading, searchHandler, filterData  }}>
      {children}
    </HouseContext.Provider>
  );
}

export default HouseProvider;

export function useHouse(params) {
  return useContext(HouseContext);
}
