import React from 'react';
export default function Space(props) {

  return (
        <button className="space" 
        onClick={()=> props.onClick()}>
            <span className="full">{props.value}</span> 
        </button>
);
}
