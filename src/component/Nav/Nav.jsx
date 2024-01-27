import React,{useRef,useEffect} from 'react'
import './nav.css'
const Nav = ({timeline}) => {
    let logo=useRef(null);
    let menu_items1=useRef(null);
    let menu_items2=useRef(null);
    let menu_items3=useRef(null);
    useEffect(()=>{
    timeline.from (logo,{
        delay:.5,
        duration:1,
        opacity:0,
        y:100

    })
    timeline.from (menu_items1,{
        duration:1,
        opacity:0,
        y:100

    },'-=.3')
    timeline.from (menu_items2,{
        duration:1,
        opacity:0,
        y:100

    },'-=.3')
    timeline.from (menu_items3,{
        duration:1,
        opacity:0,
        y:100

    },'-=.3')
    })
  return (
    <div>
      <div className="header">
        <div className="logo" ref={el=>logo=el}>
        LOGO
        </div>
        <div className="menu">
            <ul >
                <li ref={el=>menu_items1=el}>Shop</li>
                <li ref={el=>menu_items2=el}>About</li>
                <li ref={el=>menu_items3=el}>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
