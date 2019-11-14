import React from 'react';
import A45 from './A45_1.jpg';
import AMGgroup from './AMGgroup1.jpg';
import GT from './GT_1.jpg';

const Gallery = () => {
    return(
        <section id="gallery">
            <div className="wrap">
                <h2>Issue Twenty</h2>
                <h3>A visual guide to the Southwest</h3>
                <div className="masonry">
                    <img src={A45} alt=""/>
                    <img src={AMGgroup} alt=""/>
                    <img src={GT} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;