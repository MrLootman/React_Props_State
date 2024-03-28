import "./Avatar.css";

function Avatar({ simpsonImage, simpsonFirstName, simpsonLastName }) {  
  return (
    <article>
      <img src={simpsonImage} alt="Simpson character" />
      <h2>{simpsonFirstName} {simpsonLastName}</h2>
    </article>
  )
}

export default Avatar;