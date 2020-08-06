import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title" style={{ fontWeight: 'bold', marginTop: '20px' }}>
        {props.title}
      </p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" style={{ fontWeight: 'bold' }}>
        View
      </a>

      {/* <a href={props.links} target="_blank" rel="noopener noreferrer">
        Source Code
      </a> */}
    </animated.div>
  );
}

export default CardInfo;
