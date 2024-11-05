import { IoCloseOutline } from "react-icons/io5"
import styled from "styled-components"
// import React from "react"

const SideMenu = ({sideBar, toggleSideBar}) => {
    return(
        <Container onView={sideBar}>
            <Wrapper>
                <SubWrapper>
                    <CloseSideNav onClick={toggleSideBar} >
                        <IoCloseOutline size={30} />
                    </CloseSideNav>
                </SubWrapper>
                <Nav>
                    <a href="#home" onClick={toggleSideBar}>HOME</a>
                    <a href="#about" onClick={toggleSideBar}>ABOUT</a>
                    <a href="#projects" onClick={toggleSideBar}>PROJECTS</a>
                    <a href="#contact" onClick={toggleSideBar}>CONTACT</a>
                </Nav>
            </Wrapper>
        </Container>
    )
    
}

export default SideMenu

const  Container = styled.div`
display: none;

@media (max-width: 768px) {
    /* background-color: rgb(247, 247, 247); */
    background-color: rgb(241, 240, 240);
    box-sizing: border-box;
    width: 60%;
    height: 100vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* height: 60px; */
    position: fixed;
    top: 0;
    right: 0px;
    z-index: 1000;
    /* border-bottom: 1px solid black; */
}

`

const Wrapper = styled.div`
width: 85%;
/* border: 1px solid black; */
display: flex;
flex-direction: column;`

const SubWrapper = styled.div`
height: 60px;
display: flex;
align-items: center;
justify-content: flex-end;
margin-bottom: 30px;
/* border: 1px solid black; */
border-bottom: 1px solid black;
cursor: pointer;
`

const CloseSideNav = styled.div`
display: flex;
align-items: center;
/* float: right; */
/* margin-bottom: 30px; */
/* border: 1px solid black; */
`

const Nav = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
/* gap: 30px; */
/* border: 1px solid black; */
width: 100%;
/* border: 1px solid black; */

a{
    color: black;
    text-decoration: none;
    font-family: system-ui, "Noto Sans", "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    padding: 15px 0px;
    border-bottom: 1px solid black;
}
/* hr{
    margin: 15px 0px;
    color: black;
} */
/* a:hover{
   border-bottom: 2px solid black; 
} */

`