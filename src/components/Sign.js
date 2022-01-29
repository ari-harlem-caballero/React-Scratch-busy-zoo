import React from 'react';

export default function Sign(props) {
  return <div className='zoo-sign'>
    {
      props.isOpen
        ? 'Zoo is OPEN'
        : 'Zoo is CLOSED'
    }
  </div>;
}
