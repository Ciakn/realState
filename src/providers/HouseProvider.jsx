import axios from "axios";
import { functions, initial } from "lodash";
import React, { Children, useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
const BASE_URL = "http://localhost:5000/houses";
const HouseContext = createContext();


function HouseProvider({ children }) {

  const { data, isLoading } = useFetch("");
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);
  const searchHandler = (value) => {
    console.log(value);
    setFilterData(data)
    if (!value) console.log("Type Something");

    const filteredData = data.filter((item) =>
      item.area.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(filteredData);

  }
  const bookmarkHandler = () => {
    
  }



  return (
    <HouseContext.Provider value={{ data, isLoading, searchHandler, filterData, bookmarkHandler , bookmarks }}>
      {children}
    </HouseContext.Provider>
  );
}

export default HouseProvider;

export function useHouse(params) {
  return useContext(HouseContext);
}
