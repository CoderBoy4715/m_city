import React from 'react';
import { Link } from 'react-router-dom';
import classes from './UI.module.css';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
  const template = (
    <div
      className={classes.img_cover}
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo}) no-repeat`,
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className={classes.link_logo}>
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
