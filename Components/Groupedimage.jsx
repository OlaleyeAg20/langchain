import React from 'react'
import Image from 'next/image'

const Groupedimage = (props) => {

    const imagesArray = props.images
    const renderImages = imagesArray.map(image => {
        return <Image key={image} src={"/images/" + image} width={50} height={50} alt={image} />
    })

  return (
    <div className='groupedImage'>
        {renderImages}
    </div>
  )
}

export default Groupedimage