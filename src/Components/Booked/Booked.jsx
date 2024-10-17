import React from 'react';
import "./Booked.css";
import { useOutletContext } from 'react-router-dom';
import Card from './../Card/Card';
function Booked(props) {
    const { bookedMovies, bookedSeries } = useOutletContext();

    function book() {

    }
    return (
        <div className="booked container">
                        <div className="row">
                {bookedMovies.length?<>
                <h2 className='mt-5 fs-1 fw-bold text-white'>Booked Movies</h2>
                <div className="row  gy-5 gx-2">
                    {bookedMovies.map((movie,ind)=>{return <Card key={ind} book={book} ind={ind} star={movie.vote_average} title={movie.title} img={movie.poster_path} para={movie.overview} />})}
                </div>
            </>:<div className='not d-flex justify-content-center align-items-start text-white fs-1 fw-bold'>Not Have Booked Movies Yet</div>  }
            </div>
            <div className="row">
            {bookedSeries.length?<>
            <h2 className='mt-5 fs-1 fw-bold text-white'>Booked Series </h2>
            <div className="row gy-5 gx-2">
                {bookedSeries.map((Serie,ind)=>{return <Card key={ind} book={book} star = {Serie.vote_average} ind={ind} title={Serie.original_name} img={Serie.poster_path} para={Serie.overview} />})}
            </div>
        </>:<div className='not d-flex justify-content-center align-items-start text-white fs-1 fw-bold'>Not Have Booked Movies Yet</div>}
            </div>
        </div>
    )
}

export default Booked;
