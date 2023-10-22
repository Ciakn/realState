import axios from "axios";
import { initial } from "lodash";
import React, { Children } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
const BASE_URL = "http://localhost:5000/houses";
const HouseContext = createContext();
const houseReducer = (state, action) => {
  switch (action.type) {
    case "filter":
      {
      }
      break;

    default:
      break;
  }
};
function HouseProvider({ children }) {
  const { data, isLoading } = useFetch();
  const initialState = {
    houses: [],
    isHouseLoading: false,
    error: "",
  };
  console.log(initialState);
  const [{ houses, error }, dispatch] = useReducer(houseReducer, initialState);

  return (
    <HouseContext.Provider value={{ data, isLoading }}>
      {children}
    </HouseContext.Provider>
  );
}

export default HouseProvider;

export function useHouse(params) {
  return useContext(HouseContext);
}
