import React from 'react'

const Contestations = () => {
  return (
    <div>
      <h5>web development & motion design – 2024</h5>
        <h1>contestations.ai</h1>

        <p className="description">
        <a href="https://contestations.ai" target="_blank" rel="noreferrer">Contestations.AI&#10548;</a> is an interdisciplinary conference examining the societal, political, and cultural implications of artificial intelligence. Bringing together scholars, artists, and practitioners, the event challenges dominant narratives around AI and foregrounds critical perspectives on data, automation, and algorithmic governance. 
        <br/><br/>
        As part of developing the website for it, I created an animated header using React and Framer Motion. On the right is the mobile version. The animation was designed to reflect the conference’s themes of disruption and complexity, using abstract motion and layered elements. I focused on smooth yet unpredictable transitions to evoke a sense of dynamic tension.
        </p>

        <video className="projectimg" autoplay controls loop src="./img/contestations/animation-mobile.mov" />
    </div>
  )
}

export default Contestations