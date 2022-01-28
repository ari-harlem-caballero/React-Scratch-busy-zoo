import React from 'react';
import AnimalIcons from './AnimalIcons';

export default function Parade(props) {
  return <div className='animal-list'>
    {props.animals.map((animal, i) => <AnimalIcons key={animal + i} animal={animal} />)}
  </div>;
}
