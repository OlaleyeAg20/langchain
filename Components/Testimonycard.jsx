import React from 'react'
import { Star } from './Icon'
import Image from 'next/image'

const Testimonycard = (props) => {
  return (
    <section className='testimony-card'>
        <div className='user'>
            <Image className='img' src={"/" + props.userImage} width={100} height={100} alt={`profile picture of ${props.userName}`} />
            <div>
                <p>{props.userName}</p>
                <span>{props.role}</span>
            </div>
        </div>
        <p>
            {props.testimony}
        </p>
        <div className="ratings">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    </section>
  )
}

export default Testimonycard