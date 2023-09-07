import React from 'react'
import './Footer.css'

const Footer = ({mytheme}) => {
    return (
        <footer className='--flex-center' data-theme={mytheme}>
            <p>copyright &copy; 2023.</p>
        </footer>
    )
}

export default Footer
