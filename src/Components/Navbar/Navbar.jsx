import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='position-fixed rounded-5 me-5 shadow-lg'>
            <div className="upper">
                <ul className='list-unstyled' >
                    <li>
                        <i className="fa-solid fa-clapperboard fa-2x  text-danger"></i>
                    </li>
                    <li >
                        <Link to="/movie"><i className="fa-solid fa-film  text-white-50"></i></Link>
                    </li>
                    <li >
                        <Link to="/series"><i className="fa-solid fa-tv  text-white-50"></i></Link>
                    </li>
                    <li >
                        <Link to="/booked"><i className="fa-solid fa-bookmark text-white-50  "></i></Link>
                    </li>
                </ul>
            </div>
            <div className="lower">
                <figure>
                    <img src={require("../../Assets/avatar.jpg")} alt="human" />
                </figure>
            </div>
        </nav>
    )
}

export default Navbar;
