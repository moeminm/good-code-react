import React from 'react';

function Footer (){
    return (
        <div className="footer">
        <div className="footer__left">
            <img src='https://moeminm.github.io/goodcode/images/footerlogo.png' className='footer logo' />
        </div>
        <div className="footer__right">
            <a href='#' className='footer__links'>Home</a>
            <a href="#substack" className='footer__links'>Newsletter</a>
            <a href='#challenges' className='footer__links'>View Challenges</a>
        </div>
    </div>
    )
}

export default Footer;