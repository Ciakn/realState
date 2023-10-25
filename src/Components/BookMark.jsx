import React, { useEffect } from 'react'

import { useBookmarks } from '../providers/BookMarkProvider';

function BookMark() {

    const { bookmarks, isLoading, getBookMarks, removeBookMark } = useBookmarks();

    console.log(bookmarks);
    useEffect(() => {
        getBookMarks()
    }, [bookmarks])
    if (isLoading) return <p>Loading...</p>
    if(!bookmarks || !bookmarks.length) return <p>no bookmarks</p>
    return (

        <div className='bookmark-container'>

            {bookmarks.map(bookmark => {
                return (
                    <div className='bookmark'>
                        <div className='bookmark-img'><img src={bookmark.img} /></div>
                        <div className='bookmark-info'>
                            <p>{`${bookmark.rooms} bedroom ${bookmark.title} in ${bookmark.area}`}</p>
                            <p> price : {bookmark.price} </p>
                            <button className='btn bg-danger text-light' onClick={() => removeBookMark(bookmark.id)}>Remove Bookmark</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookMark