import React from 'react'
import BookMarkProvider from './BookMarkProvider'
import HouseProvider from './HouseProvider'

function ProviderLayout({ children }) {
    return (
        <div>
            <BookMarkProvider>

                <HouseProvider>
                    {children}
                </HouseProvider>
            </BookMarkProvider>


        </div>
    )
}

export default ProviderLayout