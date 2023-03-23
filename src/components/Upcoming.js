import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import MovieCard from "./MovieCard";

export default function Upcoming() {
  const [Movies, setMovies] = useState([]);
  const loc = useLocation().pathname
  const api =
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.results);
    }
    getMovies();
  }, []);

  return (
    <>
      <div className="__main bg-gray-700 dark:bg-gray-200 font-primry">
        <div className="flex justify-center flex-wrap items-center pt-16">
          {Movies.map((Movie, id) => (
            <MovieCard
              key={Movie.id}
              id={Movie.id}
              name={Movie.title}
              path={Movie.poster_path}
              loc={loc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
