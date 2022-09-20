import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './../../assets/logo.svg';
import './NavBar.css';

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT3</a></p>
      <p><a href='#possibility'></a>Open AI</p>
      <p><a href='#features'></a>Case Studies</p>
      <p><a href='#blog'></a>Library</p>
    </>
  )
}

const NavBar = () => {

  const [toggleMenu, setTogleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>NavBar
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setTogleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setTogleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gtp3__navbar-menu_container scale-up-bottom'>
              <div className='gpt3__navbar-menu_container-links'></div>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          )}
        </div>
     

    </div>
  )

}

export default NavBar