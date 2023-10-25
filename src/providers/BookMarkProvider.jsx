
import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
const BookMarkContext = createContext();
function BookMarkProvider({ children }) {
    const [bookmarks, setBookMarks] = useState([]);
    const BookMarkHandler = async (bookmark) => {
        console.log(bookmark);
        try {
            const { data } = await axios.post(`http://localhost:5000/bookmarks`, bookmark);
            


        } catch (error) {
            console.log(error);
        }

    }
    const removeBookMark = async (id) => {
        console.log(id , `delete`);
        try {
            await axios.delete(`http://localhost:5000/bookmarks/${id}`)
        } catch (error) {
            console.log(error);
        }
    }
    const getBookMarks = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/bookmarks`);
            console.log(data);
            setBookMarks(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <BookMarkContext.Provider value={{ bookmarks, getBookMarks, BookMarkHandler, removeBookMark }}>
            {children}
        </BookMarkContext.Provider>
    )
}

export default BookMarkProvider
export const useBookmarks = () => useContext(BookMarkContext)
