import React from 'react'
import './Hero.css'
import heroImg from '../../assets/phone.svg'

const Hero = ({mytheme}) => {
    return (
        <section className='hero' data-theme={mytheme}>
            <div className='container --flex-between'>
                <div className='hero-text'>
                    <h1>Visit Villa Shop Landing Page</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sequi sapiente animi dolorum aut temporibus tempora itaque 
                        eius adipisci possimus consequatur minima laboriosam, 
                        molestiae odio impedit a libero excepturi harum voluptatibus.
                    </p>
                    <div className='--flex-start'>
                        <button className='--btn btn-p'>Learn more</button>
                        <button className='--btn --btn-danger'>Sign up</button>
                    </div>
                </div>
                <div className='--text-center'>
                    <img src={heroImg} alt="phone" />
                </div>
            </div>
        </section>
    )
}

export default Hero
