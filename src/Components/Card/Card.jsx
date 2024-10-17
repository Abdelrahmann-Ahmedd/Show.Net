import React from 'react';
import "./Card.css";

function Card(props) {

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card position-relative" style={{ width: "18rem" }}>
                <img src={"https://image.tmdb.org/t/p/original/" + props.img} className="card-img-top" alt="..."></img>
                <div className="card-body d-flex justify-content-center align-items-center">
                    <h5 className="card-title text-center text-capatalise fs-4 fw-bold text-danger">{props.title}</h5>
                    <i onClick={function(){ props.book(props.ind)}} className="fa-solid fa-bookmark position-absolute end-0 top-0 fa-2x me-1 text-white "></i>
                    <div className='position-absolute mt-2 ms-2 start-0 top-0 d-flex justify-content-center align-items-center'>
                        <i className="fa-solid fa-star text-warning fa-3x position-relative"></i>
                        <div className='text-white fs-6 position-absolute'>{Number(props.star).toFixed(1)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
