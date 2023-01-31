import React from "react";
import { useNavigate } from "react-router-dom";

const TvShows = () => {
  const navigate = useNavigate();
  return (
    <div className="movies">
      <h2>TvShows</h2>
      <button onClick={() => navigate(-1)}>Go Back To Home Page</button>
    </div>
  );
};

export default TvShows;
