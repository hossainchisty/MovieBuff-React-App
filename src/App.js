import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
import "./style/App.css";
const API_URL = "http://www.omdbapi.com?apikey=84a67f6f";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spider-man");
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      searchMovies(searchTerm)
    }
  };
  return (
    <div className="app">
      <h1>MovieBuff</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
