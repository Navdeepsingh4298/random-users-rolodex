import React from 'react';
import './card.styles.css';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img alt='person' src={`https://robohash.org/${props.person.id}?set=set${props.set}&size=180x180`} />
      <h2>{props.person.name}</h2>
      <p>{props.person.email}</p>
    </div>
  )
}

//TODO: dynamic changes set1 set2 set3 set4 set5
//TODO generate users info randomly using random number