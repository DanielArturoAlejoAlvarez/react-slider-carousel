import React, { useState } from 'react'
import { DataSlider } from './DataSlider'

const ImageSlider = ({slides}) => {

  const [current, setCurrent] = useState(0)

  const length = slides.length



  return (
    <section className="slider">
      {DataSlider.map((slide,index)=>(
        <img src={slide.image} alt="Ferrari image" />
      ))}
    </section>
  )
}

export default ImageSlider
