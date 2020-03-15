import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

// Keep the ID (munster.id) in case there are changes to any of the IDs
export const CardList = props => (
    <div className='card-list'>
        {props.munsters.map(munster => (
            <Card key={munster.id} munster={munster} />
        ))}
    </div>
)