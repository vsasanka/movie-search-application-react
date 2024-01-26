import React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import "./App.css";

// a21751cf

const API_URL = "https://www.omdbapi.com?apikey=a21751cf";

const movie1 = {
    Poster : "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
    Title : "The Incredible Hulk",
    Type : "movie",
    Year : "2008",
    imdbID : "tt0800080"
}

const MovieCard = ({movie}) => {
    return (
        <div className='movie' key={movie.imdbID}>
            <div className='title'>{movie.Title}</div>
            <img
                src={movie.Poster}
                alt='movie'
             />
        </div>
    )
};

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies ] = useState([]);

    const searchMovies = async (title) => {
        const searchMoviesData = await fetch(`${API_URL}&s=${title}`);
        const data = await searchMoviesData.json();
        setMovies(data.Search);

        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <div className='app'>
            <div className='title'>
                <h1>FilmSearch</h1>
            </div>
            <div className='search'>
                <h2>Search</h2>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                 />
            </div>
            <div className='Container'>
                {movies.map((movie) => {
                    return (
                    <MovieCard
                        movie={movie}
                    />)
                })}
                
            </div>
        </div>
    );
};

export default App;