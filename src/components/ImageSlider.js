import React from 'react'
import { DataSlider } from './DataSlider'

const ImageSlider = () => {
  return (
    <>
      {DataSlider.map((slide,index)=>(
        <img src={slide.image} alt="Ferrari image" />
      ))

      }
    </>
  )
}

export default ImageSlider
