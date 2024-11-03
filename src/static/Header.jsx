import styled from "styled-components"
import {IoSunnyOutline} from "react-icons/io5"
import { MdOutlineMenu } from "react-icons/md"

const Header = () => {
    return(
        <Container>
            <Wrapper>
                <Mode>
                    <h1>MODE</h1>
                    <IoSunnyOutline />
                </Mode>
                <Nav>
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </Nav>
                <SideNav>
                        <MdOutlineMenu size={30} />
                </SideNav>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.div`
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
`

const Wrapper = styled.div`
width: 85%;
/* padding: 0px 60px; */
display: flex;
align-items: center;
justify-content: space-between;
/* border: 1px solid black; */
`

const Mode = styled.div`
display: flex;
align-items: center;
h1{
    font-family: system-ui, "Noto Sans", "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-right: 5px;
}`

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
@media (max-width: 768px) {
    display: block;
    
}
`