import React from 'react'
import Button from './Button'
import { Markfilled } from './Icon'

const Products = (props) => {
  return (
    <section className={`product-card ${props.popular ? 'popular' : ''}`}>
        <h2>{props.productName}</h2>
        <p>{props.description}</p>
        <p className='price'>
            <span className='priceInDollar'>${props.price}</span>
            <span>/month</span>
        </p>
        <Button className={props.popular ? 'buttonfilled' : 'buttonemptied'}>Select Plan</Button>
        <ul>
            {props.benefits.map((benefit, index) => {
                return (
                    <li key={index} className={benefit.available ? 'available' : 'unavailable'}>
                        {benefit.available ? 
                        <Markfilled fill={props.popular ? "#fff" : "#8F0002"} stroke={props.popular ? "#8F0002" : "#fff"} /> : 
                        <Markfilled fill="#969696" stroke="#fff" />}
                        {benefit.benefit}
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Products