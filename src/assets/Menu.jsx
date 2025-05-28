import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

  return (
    <div className="navigation">
        <div className="nav" onClick={() => navigate('odditype')}>odditype</div>
        <div className="nav" onClick={() => navigate('hyperlink')}>hyperlink//</div>
        <div className="nav" onClick={() => navigate('aaniaalto')}>aaniaalto'23</div>
        <div className="nav" onClick={() => navigate('contestations')}>contestations.ai</div>
        <div className="nav" onClick={() => navigate('hypertext')}>hypertext & the design process</div>
        <div className="nav" onClick={() => navigate('kurrent')}>kurrent typeface</div>
        <div className="nav" onClick={() => navigate('thehmm')}>the hmm</div>
        <div className="nav"><a href="https://www.guushoeberechts.nl/sony.html" target="_blank" rel="noreferrer">all works (kinda) &#10548;</a></div>
    </div>
  )
}

export default Menu