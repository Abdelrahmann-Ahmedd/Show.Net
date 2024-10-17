import React, { useState } from 'react';
import "./Layout.css";
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [bookedMovies, setBookedMovies] = useState([]);
    const [bookedSeries, setBookedSeries] = useState([]);
    return (
        <div className="layout">
            <Navbar />
            <Outlet context={{ bookedMovies, bookedSeries, setBookedMovies, setBookedSeries }} />
        </div>
    )
}

export default Layout;
