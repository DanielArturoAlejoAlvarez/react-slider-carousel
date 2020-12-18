import React, { useState } from 'react'
import { DataSlider } from './DataSlider'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = ({slides}) => {

  const [current, setCurrent] = useState(0)

  const length = slides.length

  const prevSlide = ()=>{
    
  }
  const nextSlide = ()=>{

  }


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
      <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
      {DataSlider.map((slide,index)=>(
        <img src={slide.image} alt="Ferrari image" />
      ))}
    </section>
  )
}

export default ImageSlider
