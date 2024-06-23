import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
        />
    );
}
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
        />
    );
}

function Types({ types, selectedType, onTypeClick, setPage }) {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {types.map((type) => (
                    <div key={type.id} className={`type ${selectedType === type.name ? 'selected' : ''}`} onClick={() => { 
                            onTypeClick(type.name);
                            setPage((prev) => ({
                                ...prev,
                                current: 1
                            }));
                        }}>
                        {type.name}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Types;
