import React from "react";

export default (props) => (
  <div>
    <h1>{props.data.site.siteMetadata.title}</h1>
    <p>
      Some text about Bill Murray and what a great guy he is.
    </p>
  </div>
);

// GraphQL: tagged string
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
