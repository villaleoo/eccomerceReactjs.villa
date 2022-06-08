import React from 'react'
import './carousel.scss'

export const Carousel = ({productImgs}) => {
    
   let imgsCarousel = productImgs.map(x => x)
   let index0 = imgsCarousel.shift()
  
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide carouselContainer" data-ride="carousel">
            <ol className="carousel-indicators carouselList">
              {
                  productImgs.map((item,index)=>
                    <img key={index}  data-target="#carouselExampleIndicators" data-slide-to={productImgs.indexOf(item)} src={item}/>
                  )
              }
            </ol>
            <div className="carousel-inner containerImgsCarousel">
              {
                  productImgs[0] && 
                  <div className='carousel-item  active'>
                      <img className='d-block' src={productImgs[0]} alt="" />
                  </div>
                }
                {
                imgsCarousel.map((item,index)=>
                <div key={index} className='carousel-item '>
                  <img className='  d-block ' key={index} src={item}/>
                </div>
                )}
            </div>
        </div>
    </>
  )
}
