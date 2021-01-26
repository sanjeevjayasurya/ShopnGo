import React from 'react';
import Shopping from '../images/shopping.png'
import '../styles/hero.scss'
const Hero = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>Think Once,</h1>
                    <h1>Think Twice,</h1>
                    <h1>Think Shopping</h1>
                    <p>
                        Shopping wherever and whenever you want, 
                        you only need to be connected to the internet,
                        choose items and pay for them
                    </p>
                    <button className="main__btn"><a>Shop Now</a></button>
                </div>
                <div className="main__img--container">
                        <img id="main__img" src={Shopping} alt="shopping_image" />
                    </div>
            </div>
        </div>
    )
}

export default Hero