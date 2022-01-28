import React from 'react';

export default function Sign(props) {
  return <div>
    {
      props.isOpen
        ? 'Zoo is OPEN'
        : 'Zoo is CLOSED'
    }
  </div>;
}
