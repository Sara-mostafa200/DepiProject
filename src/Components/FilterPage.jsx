
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/movieSlice';
import MovieCard from './MovieCard';

const FilterPage = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);
  const [filters, setFilters] = useState({
    genre: '',
  });

  const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Romance'];

  // Fetch movies only once on initial load
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFilterChange = (genre) => {
    setFilters((prev) => ({
      ...prev,
      genre: prev.genre === genre ? '' : genre,
    }));
  };

  // Filter movies in the frontend
  const filteredMovies = filters.genre
    ? movies.filter((movie) => movie.genre === filters.genre)
    : movies;

  return (
    <div className="flex gap-8 p-8 min-h-screen bg-gray-900">
      {/* Filter Sidebar */}
      <div className="w-64 p-4 bg-gray-800 rounded-lg h-fit">
        <h3 className="text-xl font-semibold text-white mb-4">Filter by Genre</h3>
        <div className="space-y-3">
          {genres.map((genre) => (
            <label key={genre} className="flex items-center space-x-3 cursor-pointer">
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
          onClick={() => setFilters({ genre: '' })}
        >
          Clear Filters
        </button>
      </div>

      {/* Movies Grid */}
      <div className="flex-1">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPage;
