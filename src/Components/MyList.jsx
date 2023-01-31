import React from "react";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const navigate = useNavigate();
  return (
    <div className="movies">
      <h2>MyList</h2>
      <button onClick={() => navigate(-1)}>Go Back To Home Page</button>
    </div>
  );
};

export default MyList;
