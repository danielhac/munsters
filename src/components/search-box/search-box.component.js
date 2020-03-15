import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        // testing setState to see console logs will need to be done synchronously
        onChange={handleChange}
    />
)