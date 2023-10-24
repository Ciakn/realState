import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

function SingleHouse() {
  const { id } = useParams();
  const { data: house, isLoading } = useFetch("", id);
  if (isLoading) return <p>Loading...</p>
  console.log(house);

  return (
    <div>

      <div className='single-house_container'>
        <div className='single-house_img'>
          <img src={house.img} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, provident.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ratione.

          </p>
          <div className='single-house_buttons '>
            <button className='btn bg-success text-light ' >Contact info</button>
            <button className='btn bg-danger text-light' >BookMark</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleHouse