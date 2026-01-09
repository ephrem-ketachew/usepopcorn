import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={7} color="#00ff" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={"kghj"} />
    <StarRating maxRating={10} color="#138298" className="test" />
    <StarRating
      maxRating={5}
      color="#862651"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
  </React.StrictMode>
);
