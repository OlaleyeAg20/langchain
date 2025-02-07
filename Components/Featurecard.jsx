import React from 'react'

const Featurecard = (props) => {
  return (
    <section className='featured-card'>
        <span className='featureicon'>
            {props.icon}
        </span>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.link}>Learn more</a>
    </section>
  )
}

export default Featurecard