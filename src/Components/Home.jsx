import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useHouse } from "../providers/HouseProvider";
import { filter } from "lodash";
import { Link, Outlet } from "react-router-dom";

function HomeContainer() {
  const { data, isLoading, filterData } = useHouse();
  const [filteredHouses, setFilteredHouse] = useState([])
  useEffect(() => {

    (filterData.length === 0) ? setFilteredHouse(data) : setFilteredHouse(filterData);

  }, [filterData , data])
  console.log(filteredHouses);
  return (
    <main>
      <div className="homeContainer">
        {filteredHouses.map((house, index) => (
          <div key={house.id} className="card">
            <img src={house.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{house?.title}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, facere.
              </p>
              <Link to={`singlehouse/${house?.id}`} className="btn btn-pri">
                BUY HOUSE
              </Link>
            </div>
          </div>
        ))}


      </div>
     
  </main>
  );
}

export default HomeContainer;
