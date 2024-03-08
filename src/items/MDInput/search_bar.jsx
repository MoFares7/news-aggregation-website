import React from 'react';
import './style.css';

const SearchBar = () => {
        return (
                <div className="input-wrapper">
                        <button className="icon">
                                <svg
                                        width="25px"
                                        height="25px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                        <path
                                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                stroke="#fff"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"

                                        ></path>
                                        <path
                                                d="M22 22L20 20"
                                                stroke="#fff"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"

                                        ></path>
                                </svg>
                        </button>
                        <input type="text" name="text" className="input" placeholder="search.." />
                </div>

        );
};

export default SearchBar;