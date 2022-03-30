import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { SliderImages } from "./SliderImages";


const BannerSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = SliderImages.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1) 
    }

    return (
        <section className="relative h-full flex justify-center items">
            <ArrowCircleLeftIcon onClick={() => prevSlide()} className="absolute left-0 top-1/2 w-16 cursor-pointer" />
           {SliderImages.map((slide, index) => {
               console.log(slide)
               return (
                    <div key={index} className={`${index === currentSlide ? 'slide-active' : 'translate-x-6 ease-in-out transition'}`}>
                        {index === currentSlide && (
                            <img 
                                src={slide.image} 
                                alt="banner" 
                                key={index}
                                className="w-screen h-[600px] rounded-lg object-cover transition ease-in-out" 
                            />
                        )}
                    </div>
               )
           })}
           <ArrowCircleRightIcon onClick={() => nextSlide()} className="absolute right-0 w-16 top-1/2 cursor-pointer" /> 
        </section>
    )
}

export default BannerSlider