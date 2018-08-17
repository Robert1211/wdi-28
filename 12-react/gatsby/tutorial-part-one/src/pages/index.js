import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ color: 'blue' }}>
    <h1>Goodbye cruel world!</h1>
    <p>The Great Gatsby was not that great</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image" />

    <p>
      Visit <Link to="/page-2/">Page 2</Link>
    </p>

    <p>
      Visit <Link to="/counter/">our click counter</Link>
    </p>
  </div>
