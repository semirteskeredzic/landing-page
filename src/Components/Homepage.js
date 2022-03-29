import React from "react";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";
import Header from "./Header";
import Listing from "./Listing";
import Navigation from "./Navigation";

const Homepage = () => {
    return (
        <div>
        <Header />
        <Navigation />
        <BannerSlider />
        <Listing />
        <Footer />
        </div>
    );
    }

export default Homepage;