import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmCard from "./../FilmCard/FilmCard";
import { getMovies } from "../../lib/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { allMovies, isLoading } = useSelector((state) => state.movies);
  const [filters, setFilters] = useState({
    genre: "",
  });

  const genres = ["Action", "Comedy", "Drama", "Fantasy", "Romance"];

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleFilterChange = (genre) => {
    setFilters((prev) => ({
      ...prev,
      genre: prev.genre === genre ? "" : genre,
    }));
  };

  const filteredMovies = filters.genre
    ? allMovies.filter((movie) => {
        const genresArray = movie.Genre?.split(",").map((g) => g.trim().toLowerCase()) || [];
        return genresArray.includes(filters.genre.toLowerCase());
      })
    : allMovies;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 min-h-screen">
      {/* Filter Sidebar */}
      <div className="w-full md:w-64 p-4 rounded-lg h-fit">
        <h3 className="text-xl font-semibold text-white mb-4">
          Filter by Genre
        </h3>
        <div className="space-y-3">
          {genres.map((genre) => (
            <label
              key={genre}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.genre === genre}
                onChange={() => handleFilterChange(genre)}
                className="w-4 h-4 accent-red-600 cursor-pointer"
              />
              <span className="text-gray-200 hover:text-white transition-colors">
                {genre}
              </span>
            </label>
          ))}
        </div>
        <button
          className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          onClick={() => setFilters({ genre: "" })}
        >
          Clear Filters
        </button>
      </div>

      {/* Movies Grid */}
      <div className="flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white">Loading...</div>
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-white text-center">
            No movies found for this genre.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredMovies.map((movie) => (
              <FilmCard
                key={movie._id}
                filmVoteAverage={movie.imdbRating}
                posterPath={movie.Poster}
                filmTitle={movie.Title}
                Trailer={movie.Trailer}
                id={movie._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
