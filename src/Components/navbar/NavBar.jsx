import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHouse } from "../../providers/HouseProvider";
import { BsFillBookmarkHeartFill } from "react-icons/bs"
function NavBar() {
  const { data, isLoading, searchHandler: searchDisPatcher } = useHouse();

  const searchHandler = (e) => {
    searchDisPatcher(e.target.value)

  }
  return (
    <div className="navContainer">
      <nav id="nav">
        <div className="">
          {" "}
          <NavLink className="text" to="/">
            Home
          </NavLink>
        </div>
        <div className="searchBar">
          <input type="text" onChange={(e) => searchHandler(e)} placeholder="search the area" />
        </div>
        <Link to="bookmarks" className="btn text-light">Bookmarks  <BsFillBookmarkHeartFill className="text-light" /></Link>
      </nav>
    </div>
  );
}

export default NavBar;

const MoreOptions = ({ checkIfChecked }) => {
  return (
    <div className="moreOptionContainer">
      <div className="optionList">
        <div>room : { }</div>
        <div>
          <input
            onClick={() => checkIfChecked({ type: "parking", id: 1 })}
            type="checkbox"
            id="parking"
          />
          <label htmlFor="parking"> Parking lot</label>
        </div>
        <div>
          <input
            onClick={() => checkIfChecked({ type: "balcony", id: 2 })}
            id="balcony"
            type="checkbox"
          />
          <label htmlFor="balcony">Balconey</label>
        </div>
        <div>
          <input
            onClick={() => checkIfChecked({ type: "elevator", id: 3 })}
            id="elev"
            type="checkbox"
          />
          <label htmlFor="elevator"> elevator</label>
        </div>
      </div>
      <div className="optionList"></div>
    </div>
  );
};
