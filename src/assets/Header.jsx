import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

  return (
    <header>
        <div className="right-nav" onClick={() => navigate("/")}>Guus ☺&#xFE0E;</div>
    </header>
  )
}

export default Header