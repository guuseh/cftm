import {useEffect} from 'react'

const Odditype = () => {

  useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        document.title = "odditype :) Guus Hoeberechts"
  }, [])

  return (
    <div>
      <h5>typography app – 2023</h5>
        <h1>odditype</h1>

        <p className="description"><a href="https://www.odditype.nl" target="_blank" rel="noreferrer">Odditype&#10548;&#xFE0E;</a> is a website that randomises a given typeface to create a completely new feeling for it. Depending on the typeface, the changes can be small or drastic.
        The user can control the randomisation with the slider, upload their own fonts for changing, and download the final typeface as a useable font file.
        For an exhibition, a functionality was added to write your own message and print it out on a receipt printer. On the right is a selection of prints from Media Lab 30 Years Demo Day.</p>

        <img className="projectimg" style={{boxShadow: "none"}} src="./img/odditype/prints/demoday57.png"></img>
        <img className="projectimg" src="./img/odditype/odditype.gif"></img>
        <img className="projectimg" style={{boxShadow: "none"}} src="./img/odditype/prints/demoday13.png"></img>
        <img className="projectimg" src="./img/odditype/odditype1.png"></img>
        <div className="imgcontainer">
           <img style={{boxShadow: "none", width: "50%"}} src="./img/odditype/prints/demoday4.png"></img>
           <img style={{boxShadow: "none", width: "25%"}} src="./img/odditype/prints/demoday32.png"></img>
           <img style={{boxShadow: "none", width: "20%"}} src="./img/odditype/prints/demoday7.png"></img>
        </div>
        <img className="projectimg" src="./img/odditype/odditype2.png"></img>
        <div className="imgcontainer">
           <img style={{boxShadow: "none", width: "35%"}} src="./img/odditype/prints/demoday12.png"></img>
           <img style={{boxShadow: "none", width: "60%"}} src="./img/odditype/prints/demoday19.png"></img>
        </div>
        <img className="projectimg" src="./img/odditype/odditype3.png"></img>
        <img className="projectimg" style={{boxShadow: "none"}} src="./img/odditype/prints/demoday16.png"></img>
        <img className="projectimg" src="./img/odditype/odditype4.png"></img>
        <div className="imgcontainer">
           <img style={{boxShadow: "none", width: "35%"}} src="./img/odditype/prints/demoday39.png"></img>
           <img style={{boxShadow: "none", width: "20%"}} src="./img/odditype/prints/demoday48.png"></img>
           <img style={{boxShadow: "none", width: "40%"}} src="./img/odditype/prints/demoday43.png"></img>
        </div>
        <img className="projectimg" style={{boxShadow: "none"}} src="./img/odditype/prints/demoday41.png"></img>
    </div>
  )
}

export default Odditype