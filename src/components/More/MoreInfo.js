
import React from 'react';
import './More.css';

const MoreInfo = ({ name, imageSrc, description, alternate }) => {
  return (
    <div className={`artist ${alternate ? 'alternate' : ''}`}>
      <img className="i1" src={imageSrc} alt={name} />
      <div className="info">
        <h2 className="n2">{name}</h2>
        <p className="p2">{description}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
