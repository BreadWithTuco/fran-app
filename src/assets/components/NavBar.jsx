import React from 'react'
import { NavLink } from 'react-router-dom'

import { useState } from 'react'
import '../styles/navBar.css'

export const NavBar = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () =>{
        setShowModal(!showModal)
    }




  return (
    <div className='navBar__container'>
        <label className="navBar_hambur" onClick={handleClick}>
            <span class="material-symbols-outlined hamburIcon">
            menu
            </span>
        </label>
        <nav className={`navBar__menu ${showModal ? 'show' : ''}`}>
            <div className='navBar__box'>
                <div className='logo__box'>
                    <img src="./assets/image/logo.svg" alt="logo" className='logo'/>
                </div>
                <div className='container_links'>
                    <div class="navLine"></div>
                    <NavLink to={"/"} onClick={handleClick} className="links" activeclassname="active">Home</NavLink>
                    <div class="navLine"></div>
                    <NavLink to={"/products"} onClick={handleClick} className="links">Productos</NavLink>
                    <div class="navLine"></div>
                    <NavLink to={"/services"} onClick={handleClick} className="links">Servicios</NavLink>
                    <div class="navLine"></div>
                </div>
            </div>
        </nav>
    </div>
  )
}
