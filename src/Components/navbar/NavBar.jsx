import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHouse } from "../../providers/HouseProvider";

function NavBar() {
  const { data, isLoading, checkIfChecked } = useHouse();
  const [showOptions, setShowOptions] = useState(false);
  const [elevator, setEelevator] = useState(false);
  const [parkingLot, setParkingLot] = useState(false);
  const [balconey, setBalconey] = useState(false);
  return (
    <div className="navContainer">
      <nav id="nav">
        <div className="">
          {" "}
          <NavLink className="text" to="/">
            Home
          </NavLink>
        </div>
        <div className="optionContainer">
          <div onClick={() => setShowOptions(!showOptions)} className="text">
            options
          </div>

          <div className="text">
            {showOptions && (
              <div>
                <MoreOptions checkIfChecked={checkIfChecked} />
              </div>
            )}
          </div>
        </div>
        <div className="text">price</div>
      </nav>
    </div>
  );
}

export default NavBar;

const MoreOptions = ({ checkIfChecked }) => {
  return (
    <div className="moreOptionContainer">
      <div className="optionList">
        <div>room : {}</div>
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
