import React from "react";
import "../style/App.css";
import "../style/MovieSkeleton.css";

const MovieListSkeleton = () => {
  return (
    <div className="movie-list-skeleton">
      {/* <div className="movie-list-skeleton__header"></div> */}
      <div className="movie-list-skeleton__items">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="movie-list-skeleton__item">
            <div className="movie-list-skeleton__poster"></div>
            <div className="movie-list-skeleton__info">
              {/* <div className="movie-list-skeleton__title"></div>
                <div className="movie-list-skeleton__subtitle"></div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListSkeleton;
