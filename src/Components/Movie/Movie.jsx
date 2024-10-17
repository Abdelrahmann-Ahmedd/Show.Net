import React, { useEffect, useState } from 'react';
import "./Movie.css";
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Loading from '../Loading/Loading';
import { useOutletContext } from 'react-router-dom';

function Movie(props) {

    let [allTrendingMovies,setAllTrendingMovies] = useState([]);
    let [allMovies,setAllMovies] = useState([]);
    let {bookedMovies,setBookedMovies} = useOutletContext();

    function bookMovie(ind) {
        let movieToAdd = allMovies[ind];
        
        // Check if the movie already exists in the array using a unique identifier (e.g., id)
        if (!bookedMovies.some(movie => movie.id === movieToAdd.id)) {
            let newAllBooked = [...bookedMovies, movieToAdd];
            console.log(newAllBooked);
            setBookedMovies(newAllBooked);
        }
    }

    async function getTrendingMovies() {
        const {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
            headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzAwMTg0YTdlNTYxNjU5MWY4ZTRkNzY5ODg0NDUxNSIsIm5iZiI6MTcyODk5ODkxOC4yMzk0MzIsInN1YiI6IjY3MGU2YzMxNDJlMTM5MWM1NjY3MTViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzDoBHtBAfaWRdVMbav6ek6ErsfS9cZQspq8IFlAUz8'}
        });
        setAllTrendingMovies(data.results);
    }

    async function getAllMovies() {
        const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie", {
            headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzAwMTg0YTdlNTYxNjU5MWY4ZTRkNzY5ODg0NDUxNSIsIm5iZiI6MTcyODk5ODkxOC4yMzk0MzIsInN1YiI6IjY3MGU2YzMxNDJlMTM5MWM1NjY3MTViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzDoBHtBAfaWRdVMbav6ek6ErsfS9cZQspq8IFlAUz8'}
        });
        setAllMovies(data.results);
    }

    useEffect( ()=> {
        getTrendingMovies();
        getAllMovies();
    },[] )

    useEffect(() => {
    }, [allTrendingMovies]);
    
    useEffect(() => {
    }, [allMovies]);

    return (
        <div className="movie container">
            {allTrendingMovies.length?<>
            <div className="row">
                <div className="col-lg-12">
                    <h2 className='mt-4 mb-5 text-white'>Trending Movies</h2>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={"https://image.tmdb.org/t/p/original/" + allTrendingMovies[allTrendingMovies.length-1].backdrop_path} className="d-block w-100" alt="..."></img>
                            </div>
                            {allTrendingMovies.map( (movie ,ind)=> { return <Carousel  key={ind} img = {movie.backdrop_path} /> } )}
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
            {allMovies.length?<>
                <div className="row pt-4 gy-5 gx-2">
                    <h2 className='mt-5 text-white'>ALL Movies</h2>
                    {allMovies.map((movie,ind)=>{return <Card key={ind} ind={ind} book={bookMovie} star={movie.vote_average} title={movie.title} img={movie.poster_path} para={movie.overview} />})}
                </div>
            </>:<Loading/>}
        </div>
    )
}

export default Movie;
