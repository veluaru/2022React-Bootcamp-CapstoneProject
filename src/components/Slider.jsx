import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';


function Slider({ banners }) {
    return (
        <div>
            {/* <button onClick={onClickLeft}>left</button>
            <img src={selectedBanner.href} alt="slider" />
            <button onClick={onClickRight}>right</button> */}
            <Carousel>
                {banners.results.map((banner) =>
                    <Carousel.Item key={banner.id.toString()}>
                        <img
                            className="d-block w-100"
                            src={banner.data.main_image.url}
                            alt={banner.data.main_image.alt}
                        />
                    </Carousel.Item>
                )
                }
            </Carousel>
        </div>
    );
}

export default Slider;