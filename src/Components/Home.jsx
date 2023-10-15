import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useHouse } from "../providers/HouseProvider";

function HomeContainer() {
  const { data, isLoading } = useHouse();

  return (
    <div className="homeContainer">
      {data.map((house, index) => (
        <div key={house.id} className="card">
          <img src={house.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{house?.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, facere.
            </p>
            <a href="#" className="btn btn-pri">
              more...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContainer;
