import { useEffect, useState } from "react"
import ToggleMenu from "./ToggleMenu"
import menu from "../helpers/menu.js"

const Menu = ({page})=>{
  const [active, setActive]= useState(false)
  const ToggleMenuFunction = ()=>{
    !active ? setActive(true) : setActive(false)
  }
  useEffect(()=>{
    console.log(page)
  },[])
  return (
    <nav className="main-nav">
      <ToggleMenu active={active} action={ToggleMenuFunction}/>
      <ul className={`main-menu ${active ? 'is-active' : ''}`}>
        {
          menu.map(item=>(
            <li key={item.title} className={`main-menu__item ${page===item.title ? 'selected' : ''}`}>
              <a href={`${item.link}`} className="main-menu__link">{item.title}</a>
            </li>
            
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu
