import styled from "styled-components"
import {IoReorderThreeOutline} from "react-icons/io5"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SideMenu from "../components/SideMenu"
import Logo from "../assets/png/logo.png"

const Header = () => {
    const [sideBar, setSideBar] = useState(false)

    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return(() => {
            document.body.style.overflow = "auto"
        })
    }, [sideBar])

    return(
        <>
            <Container>
                <Wrapper>
                    <Link to="/">
                        <LogoNav>
                            <img src={Logo} alt="" />
                        </LogoNav> 
                    </Link>
                    <Nav>
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                    </Nav>
                    <SideNav onClick={toggleSideBar}>
                        <IoReorderThreeOutline size={30} />
                    </SideNav>
                </Wrapper>
            </Container>
            {sideBar === false ? null : <SideMenu  sideBar={sideBar} toggleSideBar={toggleSideBar} />}
        </>
    )
}

export default Header

const Container = styled.div`
background-color: rgb(247, 247, 247);
border-bottom: 1px solid black;
box-sizing: border-box;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 60px;
position: fixed;
top: 0;
left: 0;
z-index: 1;
`

const Wrapper = styled.div`
/* width: 85%; */
width: calc(85% + 60px);
/* padding: 0px 60px; */
display: flex;
align-items: center;
justify-content: space-between;
/* border: 1px solid black; */
`

const LogoNav = styled.div`
display: flex;
align-items: center;
img{
    width: 100px;
    height: 60px;
    margin-left: -14px;
    
}
`

const Nav = styled.div`
width: 100%;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: flex-end;
gap: 30px;

@media (max-width: 768px) {
    display: none;
}

a{
    color: black;
    text-decoration: none;
    font-family: system-ui, "Noto Sans", "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
}
a:hover{
   border-bottom: 2px solid black; 
}
/* a:active{
    border-bottom: 1px solid black;
} */
`
const SideNav = styled.div`
display: none;
cursor: pointer;

@media (max-width: 768px) {
    display: block;
    /* z-index: 1000; */
    
}
`