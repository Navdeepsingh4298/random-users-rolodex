import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

export default function CardList(props) {
  return (
    <div className='card-list'>
      {  props.people.map(person => (
        <Card key={person.id} person={person} set={props.set} />
      ))}
    </div>
  );
}




