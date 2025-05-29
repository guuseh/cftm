import React from 'react'

const Aaniaalto = () => {
  return (
    <div>
      <h5>visual identity & web development – 2023</h5>
        <h1>aaniaalto'23</h1>

        <p className="description">Graphic design and web development for the 8th edition of ääniaalto, the annual sound and new media festival produced by DADA ry.
            Inspired by the theme ecotonal sonics, I tried to visualise eternal movement, sonics, nature, and interdisciplinarity, using Processing.
            The motion design inspiration came from a small tool I developed earlier that year to morph typography in relation to the Superformula.
            I worked on the visual identity, physical posters, instagram posts (together with Anh Ngo), visuals for during the festival, and the web design and development.</p>
    
        <img className="projectimg" src="./img/aaniaalto/entrance.gif" />
        <video className="projectimg" autoplay controls src="./img/aaniaalto/entranceanimation.mp4"/>
        <video className="projectimg" autoplay controls src="./img/aaniaalto/FontGlitch.mp4" />
        <div className="imgcontainer">
          <img src="./img/aaniaalto/poster1.png" style={{width: "49%"}}/>
          <img src="./img/aaniaalto/poster2.png" style={{width: "49%"}}/>
        </div>
        <img className="projectimg" src="./img/aaniaalto/glitch3.gif" />
        <div className="imgcontainer">
          <img src="./img/aaniaalto/oodiposters1.png" style={{width: "31%"}}/>
          <img src="./img/aaniaalto/oodiposters2.png" style={{width: "31%"}}/>
          <img src="./img/aaniaalto/oodiposters3.png" style={{width: "31%"}}/>
        </div>

    </div>
  )
}

export default Aaniaalto