import Maincontent from "./component/MianContent/Maincontent"
import Nav from "./component/Nav/Nav"
import gsap from "gsap"

function App() {
let timeline=gsap.timeline();
  return (
    <>
    <Nav timeline={timeline}/>
    <Maincontent timeline={timeline}/>
    </>
  )
}

export default App
