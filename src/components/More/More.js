
import React from 'react';
import MoreInfo from './MoreInfo';
import './More.css';

const artists = [
  {
    name: "Taylor Swift",
    imageSrc: "./assets/images/taylor.jpg",
    description: "Taylor Swift is an internationally renowned singer-songwriter and actress...",
  },
  {
    name: "Arman Malik",
    imageSrc: "./assets/images/Armaan1.jpg",
    description: "Armaan Malik is a talented Indian singer known for his soulful voice and melodious renditions...",
  },
  // Add information for other artists here
  {
    name: "Taylor Swift",
    imageSrc: "./assets/images/taylor.jpg",
    description: "Taylor Swift is an internationally renowned singer-songwriter and actress...",
  },
  {
    name: "Arman Malik",
    imageSrc: "./assets/images/Armaan1.jpg",
    description: "Armaan Malik is a talented Indian singer known for his soulful voice and melodious renditions...",
  }
];

const More = () => {
  return (
    <div className='all'>
      <div className='top-bar'>
        <h1 className='bar'>Welcome to Music Artist Info</h1>
      </div>
      {artists.map((artist, index) => (
        <MoreInfo
          key={index}
          name={artist.name}
          imageSrc={artist.imageSrc}
          description={artist.description}
          alternate={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default More;
