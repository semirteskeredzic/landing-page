import { ArrowCircleLeftIcon, ArrowCircleRightIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon } from "@heroicons/react/solid";
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
            <ArrowCircleLeftIcon onClick={() => prevSlide()} className="absolute left-0 top-1/2 w-12 md:w-16 cursor-pointer text-gray-700 opacity-50 hover:opacity-100" />
           {SliderImages.map((slide, index) => {
               return (
                    <div key={index}>
                        {index === currentSlide && (
                            <img 
                                src={slide.image} 
                                alt="banner" 
                                key={index}
                                className="w-screen h-[400px] md:h-[600px] rounded-lg object-cover" 
                            />
                        )}
                    </div>
               )
           })}
           <ArrowCircleRightIcon onClick={() => nextSlide()} className="absolute right-0 w-12 md:w-16 top-1/2 cursor-pointer text-gray-700 opacity-50 hover:opacity-100" />
           <div className="absolute flex flex-row bottom-0 left-0 w-full h-auto justify-center">
                {SliderImages.map((slide, index) => {
                    return (
                        <div key={index} className="flex items-center justify-center p-2">
                            {index === currentSlide ?
                                <div className="w-4 h-4 rounded-full bg-gray-700 mr-2 cursor-pointer" />
                            :
                                <div onClick={() => setCurrentSlide(index)} className="w-4 h-4 rounded-full bg-gray-700 mr-2 cursor-pointer opacity-50" />}
                        </div>
                    )
                })}
            </div> 
        </section>
    )
}

export default BannerSlider