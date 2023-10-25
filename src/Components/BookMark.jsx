import React, { useEffect } from 'react'

import { useBookmarks } from '../providers/BookMarkProvider';

function BookMark() {

    const { bookmarks, isLoading, getBookMarks } = useBookmarks();

    console.log(bookmarks);
    useEffect(() => {
        getBookMarks()
    }, [])
    if (isLoading) return <p>Loading...</p>
    return (

        <div className='bookmark-container'>

            {bookmarks.map(bookmark => {
                return (
                    <div className='bookmark'>
                        <div className='bookmark-img'><img src={bookmark.img} /></div>
                        <div className='bookmark-info'>
                            <p>{`${bookmark.rooms} bedroom ${bookmark.title} in ${bookmark.area}`}</p>
                            <p> price : {bookmark.price} </p>
                            <button className='btn bg-danger text-light' onClick={() => ""}>Remove Bookmark</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookMark