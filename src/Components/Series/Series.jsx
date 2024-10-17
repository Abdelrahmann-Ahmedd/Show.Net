import React, { useEffect, useState } from 'react';
import "./Series.css";
import axios from 'axios';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Carousel from './../Carousel/Carousel';
import { useOutletContext } from 'react-router-dom';

function Series(props) {
    
    let [allTrendingSeries,setAllTrendingSeries] = useState([]);
    let [allSeries,setAllSeries] = useState([]);
    let {bookedSeries,setBookedSeries} = useOutletContext();

    function bookSeries(ind) {
        let seriesToAdd = allSeries[ind];
        
        // Check if the movie already exists in the array using a unique identifier (e.g., id)
        if (!bookedSeries.some(serie => serie.id === seriesToAdd.id)) {
            let newAllBooked = [...bookedSeries, seriesToAdd];
            console.log(newAllBooked);
            setBookedSeries(newAllBooked);
        }
    }

    async function getTrendingSeries() {
        const {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/week", {
            headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzAwMTg0YTdlNTYxNjU5MWY4ZTRkNzY5ODg0NDUxNSIsIm5iZiI6MTcyODk5ODkxOC4yMzk0MzIsInN1YiI6IjY3MGU2YzMxNDJlMTM5MWM1NjY3MTViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzDoBHtBAfaWRdVMbav6ek6ErsfS9cZQspq8IFlAUz8'}
        });
        setAllTrendingSeries(data.results);
    }

    async function getAllSeries() {
        const {data} = await axios.get("https://api.themoviedb.org/3/discover/tv", {
            headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzAwMTg0YTdlNTYxNjU5MWY4ZTRkNzY5ODg0NDUxNSIsIm5iZiI6MTcyODk5ODkxOC4yMzk0MzIsInN1YiI6IjY3MGU2YzMxNDJlMTM5MWM1NjY3MTViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzDoBHtBAfaWRdVMbav6ek6ErsfS9cZQspq8IFlAUz8'}
        });
        setAllSeries(data.results);
    }


    useEffect( ()=> {
        getTrendingSeries();
        getAllSeries();
    },[] )

    useEffect(() => {
    }, [allTrendingSeries]);
    
    useEffect(() => {
    }, [allSeries]);

    return (
        <div className="series container">
            {allTrendingSeries.length?<>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='mt-4 mb-5 text-white'>Trending Series</h2>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={"https://image.tmdb.org/t/p/original/" + allTrendingSeries[allTrendingSeries.length-1].backdrop_path} className="d-block w-100" alt="..."></img>
                                </div>
                                {allTrendingSeries.map( (serie ,ind)=> { return <Carousel  key={ind} img = {serie.backdrop_path} /> } )}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
        </>:<Loading/>}
            {allSeries.length?        <>
            <h2 className='mt-5 text-white'>ALL Series</h2>
            <div className="row pt-4 gy-5 gx-2">
                {allSeries.map((Serie,ind)=>{return <Card key={ind} star = {Serie.vote_average} ind={ind} book={bookSeries} title={Serie.original_name} img={Serie.poster_path} para={Serie.overview} />})}
            </div>
        </>:<Loading/>}
        </div>
    )
}

export default Series;
