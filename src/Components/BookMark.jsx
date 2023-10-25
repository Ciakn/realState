import React, { useEffect } from 'react'
import { useHouse } from '../providers/HouseProvider'

function BookMark() {

    const { bookmarks, isLoading , getBookMarks} = useHouse();
    console.log(bookmarks);
    useEffect(() => {
        getBookMarks()
    },[])
    if(isLoading)return <p>Loading...</p>
    return (
      
      <div>
        
          {bookmarks.map(bookmark => {
              return (
                  <div>{bookmark.rooms }</div>
              )
          })}
    </div>
  )
}

export default BookMark