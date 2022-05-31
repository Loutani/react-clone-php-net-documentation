import React from 'react'
import scrollToTopImage from './../to-top@2x.png'

function ScrollToTop() {
    return (
        <>
            <a id="toTop" href='#toTopMarker'>
                <span id="toTopHover"></span>
                <img alt="To Top" src={scrollToTopImage} />
            </a>
        </>
    )
}

export default ScrollToTop