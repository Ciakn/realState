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
    case "value":
      break;

    default:
      break;
  }
};
function HouseProvider({ children }) {
  const { data, isLoading } = useFetch();
  const initialState = {
    houses: data,
    isHouseLoading: false,
    error: "",
  };
  console.log(initialState);
  const [{ houses, isHouseLoading }, dispatch] = useReducer(
    initialState,
    houseReducer
  );
  const checkIfChecked = async ({ type, id }) => {
 dispatch()
  };
  return (
    <HouseContext.Provider value={{ data, isLoading, checkIfChecked }}>
      {children}
    </HouseContext.Provider>
  );
}

export default HouseProvider;

export function useHouse(params) {
  return useContext(HouseContext);
}
