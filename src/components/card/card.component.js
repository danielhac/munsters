import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt='munster' src={`https://robohash.org/${props.munster.id}?set=set2&size=180x180`} />
        <h2> {props.munster.name} </h2>
        <p> {props.munster.email} </p>
    </div>
)