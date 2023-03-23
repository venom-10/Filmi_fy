import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "./MovieCard";

export default function Search() {
  const [Movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("q");
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`;
  useEffect(() => {
    async function getSearchMovie() {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.results);
    }
    getSearchMovie();
  }, [name]);

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
            />
          ))}
        </div>
      </div>
    </>
  );
}
