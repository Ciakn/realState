import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

function SingleHouse() {
  const { id } = useParams();
  const { data: house, isLoading } = useFetch("", id);

  return (
    <div>{house.map(item => {
      return (
        <div className='single-house_Container'>

        </div>
      )
    })}</div>
  )
}

export default SingleHouse