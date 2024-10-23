
import React, { useState } from 'react'
import './Header.css'
function Header(props){

    const [tootltip,changeToolTip] = useState(false)

    function handleMouseEnter(){
        changeToolTip(true)
    }

    function mouseLeave(){
        changeToolTip(false)
    }

    return(
        <div className='header'>
       
          <span className='txt'>hi </span>
        
          <span onMouseEnter={handleMouseEnter} onMouseLeave={mouseLeave}>hello </span>

          <span className='txt'>how a you </span>

          <span className='txt'>hope you are fine </span>
          <span style={{color:'red'}} className={`tootltip ${tootltip?'show-tooltip':'hide-tooltip'}`}>tootltiped</span>
    </div>
    );
}

export default Header;