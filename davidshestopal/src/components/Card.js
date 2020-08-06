import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
  return (
    <div className="d-inline-block g-card" style={{ padding: '20px' }} onClick={(e) => props.click(props.item)}>
      <img
        className="g-card-image"
        style={{ width: '320px', borderRadius: '16px' }}
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          // links={props.item.links}
        />
      )}
    </div>
  );
}

export default Card;
