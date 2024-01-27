import React,{useRef,useEffect} from 'react'
import './maincontent.css'
import hand from '../../assets/image/hands.jpg'
const Maincontent = ({timeline}) => {
 let hands=useRef(null);
 let contenth1=useRef(null);
 let contentp=useRef(null);
 useEffect(()=>{
    timeline.to(hands,{
        dealy:1,
        duration:2,
        y:"-50%",
        x:"-50%",
        opacity:1
    })
    const reloadInterval = setInterval(() => {
        window.location.reload();
      }, 20000); // Reload every 5 seconds, adjust as needed
  
      // Cleanup the interval when the component unmounts
      return () => {
        clearInterval(reloadInterval);
      };
 })
  return (
    <div>
      <div className="content">
        <h1 ref={el => contenth1 = el}>
            Shop Now!
        </h1>
        <p ref={el => contentp = el}>
            New Arrivals!
        </p>
      </div>
      <img src={hand} alt="bg" className='hands' ref={el => hands = el}/>
    </div>
  )
}

export default Maincontent
