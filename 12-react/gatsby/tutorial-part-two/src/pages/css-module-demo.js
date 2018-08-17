import React from "react";
import Container from "../components/container";

import styles from './css-module-demo.module.css';
console.log( styles );

//<User avatar="..." username="glenn" excerpt="lorem ipsum"/>

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>
);

export default () => (
  <Container>
    <User
      username="Groucho"
      avatar="http://fillmurray.com/96/96"
      excerpt="No gods no masters" />
    <User
      username="Harpo"
      avatar="http://fillmurray.com/96/96"
      excerpt="" />
    <User
      username="Chico"
      avatar="http://fillmurray.com/96/96"
      excerpt="No a'gods no a'masters, it's a me Chico" />
  </Container>
);
