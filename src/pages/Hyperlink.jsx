import {useEffect} from 'react'

const Hyperlink = () => {

useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        document.title = "hyperlink// :) Guus Hoeberechts"
  }, [])

  return (
    <div>
      <h5>interactive web animation – 2024</h5>
        <h1>hyperlink//</h1>

        <p className="description">
        <a href="https://guuseh.github.io/mypersonalhyperlink/" target="_blank" rel="noreferrer">hyperlink//&#10548;&#xFE0E;</a><sub style={{opacity: "0.6"}}>*pls open in Chrome</sub> is a web-based interactive animation project that explores the intersection of personal identity and digital space in the internet age. Built with React and Framer Motion, the piece combines interactive visuals inspired by early internet aesthetics with a poetic essay that critiques the standardisation and commodification of online presence. It reflects on the personal website as a form of self-expression and quiet resistance against the homogenised templates of modern social media.
        <br/><br/>
        By treating the personal site as both mirror and manifestation of the fragmented self, hyperlink// reclaims a digital corner for individuality. It questions how hyperconnectivity has redefined our sense of identity and community, and invites viewers to consider what it means to truly inhabit a space online.
        </p>

        <img className="projectimg" src="./img/hyperlink/hyperlink1.gif" />
        <img className="projectimg" src="./img/hyperlink/hyperlink2.gif" />
        <img className="projectimg" src="./img/hyperlink/hyperlink3.gif" />
        <img className="projectimg" src="./img/hyperlink/hyperlink4.gif" />
        <img className="projectimg" src="./img/hyperlink/hyperlink6.gif" />
        <img className="projectimg" src="./img/hyperlink/hyperlink5.gif" />
    </div>
  )
}

export default Hyperlink