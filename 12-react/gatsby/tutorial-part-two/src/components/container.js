import React from "react";

// props.children refers to <Container> this stuff here </Container> between the tags
export default (props) => (
  <div style={{margin: "3em auto", maxWidth: 600}}>
    { props.children }
  </div>
);
