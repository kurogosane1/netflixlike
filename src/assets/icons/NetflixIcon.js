import * as React from "react";

function NetflixLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g fill="#d32f2f">
        <path d="M304 0h96v512h-96zM112 0h96v512h-96z" />
      </g>
      <path fill="#f44336" d="M400 512h-96L112 0h96z" />
    </svg>
  );
}

export default NetflixLogo;
