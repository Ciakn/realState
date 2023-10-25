import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { BsCheckSquareFill, BsFillFileEarmarkCheckFill, BsFillFileEarmarkExcelFill, BsFillBookmarkHeartFill } from "react-icons/bs"
import { useHouse } from '../providers/HouseProvider';
import { useBookmarks } from '../providers/BookMarkProvider';
function SingleHouse() {
  const { id } = useParams();
  const { data: house, isLoading, } = useFetch("", id);
  const { BookMarkHandler } = useBookmarks()
  if (isLoading) return <p>Loading...</p>
  console.log(parseInt(house.price, 10));

  return (
    <div>

      <div className='single-house_container'>
        <div className='single-house_img'>
          <img src={house.img} alt="house for sell" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, provident.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ratione.

          </p>
          <div className='single-house_buttons '>
            <button className='btn bg-success text-light '  >Contact info</button>
            <button className='btn bg-danger text-light' onClick={() => BookMarkHandler(house)} >BookMark <BsFillBookmarkHeartFill className="text-light" /></button>
          </div>
        </div>
        <div className='description'>
          <h4>{`${house.rooms} bedroom ${house.title} in ${house.area}`}</h4>
          <p>YesterDay in {house.area} </p>
          <div className='house-summery'>
            <div>Rooms : {house.rooms}   <span className='divider'></span>  </div>
            <div>Meterage : {house.Meterage}   <span className='divider'></span> </div>

            <div> Made in : {house.YearOfonstruction} </div>
          </div>
          <div className='house-info'>
            <li> price : {house.price}</li>
            <li> elevator {house.elavator ? <BsFillFileEarmarkCheckFill className='text-success' /> : < BsFillFileEarmarkExcelFill className='text-danger' />} </li>
            <li> parking {house.parkingLot ? <BsFillFileEarmarkCheckFill className='text-success' /> : < BsFillFileEarmarkExcelFill className='text-danger' />}</li>
            <li>Balconey {house.balcony ? <BsFillFileEarmarkCheckFill className='text-success' /> : < BsFillFileEarmarkExcelFill className='text-danger' />}</li>
            <li>heatinySystem {house.heatinySystem ? <BsFillFileEarmarkCheckFill className='text-success' /> : < BsFillFileEarmarkExcelFill className='text-danger' />}</li>
          </div>
          <div className='desc'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, iure pariatur voluptates dolor provident laudantium officia ipsa quia similique nobis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleHouse