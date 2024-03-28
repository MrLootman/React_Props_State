import { useState } from "react";
import "./Avatar.css";

function Avatar({ simpsonImage, simpsonFirstName, simpsonLastName }) {
  const [donuts, setDonuts] = useState(0);

  return (
    <article>
      <img src={simpsonImage} alt="Simpson character" />
      <h2>{simpsonFirstName} {simpsonLastName}</h2>
      <div>
        <button onClick={() => setDonuts((previousValue) => previousValue + 1)}>🍩</button>
        <p>{donuts}</p>
      </div>
    </article>
  )
}

export default Avatar;