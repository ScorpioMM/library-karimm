import React from 'react'
import Logo from '../assets/Library.svg'
const Footer = () => {
    return (
     <footer>
        <div className="container">
            <div className="row row__column">
                <a href="/">
                    <figure className='figure__logo'>
                        <img src={Logo} className='footer__logo--img' alt="" />
                    </figure>
                </a>
                <div className="footer__list">
                    <a href="/" className='footer__link'>Home</a>
                    <span href="/" className='footer__link no-cursor'>About</span>
                    <a href="/books" className='footer__link'>Books</a>
                    <a href="/books" className='footer__link'>Cart</a>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2066 Library
                </div>
            </div>
        </div>
     </footer>
    )
}

export default Footer;