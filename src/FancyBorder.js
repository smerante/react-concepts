import React from 'react';

function FancyBorder(props) {
  return (<>
    {props.header}
    <div style={{ color: props.color }}>
      {props.children}
    </div>
    {props.footer}
  </>);
}

export default FancyBorder;