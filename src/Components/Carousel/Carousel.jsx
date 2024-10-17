import React from 'react';
import "./Carousel.css";

function Carousel(props) {
    return (
            <div className="carousel-item">
                <img src={"https://image.tmdb.org/t/p/original/" + props.img} className="d-block w-100" alt="..."></img>
            </div>
    )
}

export default Carousel
