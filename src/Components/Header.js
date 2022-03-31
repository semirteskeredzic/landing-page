import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="p-3">
                <h1 onClick={() => navigate('/') } className="text-green-700 text-3xl uppercase font-bold text-center md:text-left cursor-pointer">Landing Page</h1>
            </div>
        </div>
    )   ;
}
    
export default Header;