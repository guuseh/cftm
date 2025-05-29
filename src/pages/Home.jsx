import {useEffect} from 'react'

const Home = () => {

  useEffect(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
          });
          document.title = "portfolio :) Guus Hoeberechts"
    }, [])

  return (
    <div style={{
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}><p>Hello :)</p></div>
  )
}

export default Home