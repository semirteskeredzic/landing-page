import React from "react";
import BannerSlider from "./BannerSlider";
import Listing from "./Listing";
import { SliderImages } from "./SliderImages";


const Homepage = () => {
    return (
        <div>
            <BannerSlider props={SliderImages} />
            <Listing />
        </div>
    );
    }

export default Homepage;