import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, 
         NavbarContainer, 
         NavLogo, 
         NavIcon, 
         MobileIcon,
         NavMenu,
         NavItem,
         NavLinks,
         NavItemBtn,
         NavBtnLink,
        } from './Navbar.elements';
const Navbar = () => {
    const [click, setClick]= useState(false);
    const [button, setButton]= useState(true);
    const handleClick= () => setClick(!click);
    const showButton= () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else
            setButton(true)
    }
    useEffect(()=>{
       showButton()
    },[])
    window.addEventListener('resize' , showButton)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={handleClick}>
                        <NavIcon/>
                            CPaaSelector
                    </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/services">
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/pricing">
                            Pricing
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/blog">
                            Blog
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/login">
                            Login
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink  to="/signup">
                        <Button primary>Sign Up</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/signup">
                                    <Button onClick={showButton} fontBig primary>Sign Up</Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                   </NavMenu>                
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
