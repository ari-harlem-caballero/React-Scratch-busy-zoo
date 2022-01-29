import React from 'react';

export default function AnimalIcons(props) {
  return <div className='animal'>
    {props.animal === 'hippo' && '🦛'}
    {props.animal === 'rhino' && '🦏'}
    {props.animal === 'hedgehog' && '🦔'}
    {props.animal === 'reindeer' && '🦌'}
    {props.animal === 'rabbit' && '🐇'}
    {props.animal === 'sheep' && '🐑'}
    {props.animal === 'llama' && '🦙'}
    {props.animal === 'skunk' && '🦨'}
  </div>;
}
