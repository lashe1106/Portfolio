import styled from "styled-components"
import { GoArrowUpRight } from "react-icons/go"
import {IoLogoHtml5} from "react-icons/io"
import  {SiJavascript, SiTypescript} from "react-icons/si"
import { IoLogoReact } from "react-icons/io5"
import { FaFigma } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"
import  {FaGitAlt} from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { VscGithub } from "react-icons/vsc"
import { IoLogoVercel } from "react-icons/io5"
import { FaCss3Alt } from "react-icons/fa6"

// import TechStack from "./TechStack"

const About = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>About Me</h1>
                        <p>
                            Front-end Developer with a solid foundation in HTML,  CSS, and JavaScript, developed through structured training at Sail
                            Innovation Lab and further strengthened through hands-on practice. Experienced in creating responsive, user-friendly
                            interfaces and enhancing projects with TypeScript, modern frameworks and development tools. Driven to apply creative problem-solving
                            and technical skills within a dynamic development team.
                        </p>
                    </TextWrapper>
                </TextBox>
                <SubTextBox>                        <TechWrapper>
                        <h1>Tech Stack</h1>
                        <p>View technologies I currently work with</p>
                        <Tech>
                            <Icons>
                                <div>
                                    <IoLogoHtml5 color="rgb(221, 75, 37)" size={40} />
                                    HTML
                                </div>
                                <div>
                                   <FaCss3Alt color="rgb(26, 111, 180)" size={40} /> 
                                   CSS
                                </div>
                                <div>
                                    <SiJavascript color="rgb(236, 218, 29)" size={40} />
                                    JavaScript
                                </div>
                                <div>
                                    <SiTypescript color="rgb(0, 118, 198)" size={40} />
                                    TypeScript
                                </div>
                                <div>
                                    <IoLogoReact color="rgb(94, 211, 243)" size={40} />
                                    React.js
                                </div>
                            </Icons>
                            <Icons>
                                <div>
                                    <VscVscode color="rgb(0, 116, 200)" size={40} />
                                    VS Code
                                </div>
                                <div>
                                  <FaFigma color="" size={40} /> 
                                  Figma 
                                </div>
                                <div>
                                    <FaGitAlt color="rgb(232, 78, 49)" size={40} />
                                    Git
                                </div> 
                            </Icons>
                            <Icons>
                                <div>
                                    <FaGithub color="" size={40} /> 
                                    Github 
                                </div>
                                <div>
                                    <VscGithub color="rgb(146, 63, 159)" size={40} />
                                    Github Desktop
                                </div>
                            </Icons>
                            <Icons>
                                <div>
                                    <IoLogoVercel size={40} />
                                    Vercel
                                </div>
                                
                            </Icons>
                        </Tech>
                    </TechWrapper>
                    <SubTextWrapper>
                        <h1>Experience</h1>
                        <ExpText>
                            <p>Graduate Trainee</p>
                            <a target="_blank"  href="https://www.tokunboabiru.org/sail">Sail Innovation Lab<GoArrowUpRight /></a> 
                        </ExpText>
                        <ExpList>
                                <ul>
                                <li>
                                    Developed skills in front-end technologies through 10+ projects, including HTML, CSS, and JavaScript.
                                </li>
                                <li>
                                    Built interactive components in JavaScript and created dynamic UIs using React, with TypeScript used in select projects for enhanced code quality.
                                </li>
                                <li>
                                    Created 100% responsive layouts for major devices (mobile, tablet, desktop), improving user engagement.
                                </li>
                                <li>
                                    Successfully integrated external data by fetching APIs in multiple projects, enriching user experience.
                                </li>
                                <li>
                                    Used Git and GitHub (including GitHub Desktop) for efficient code management and workflow optimization.
                                </li>
                                <li>
                                    Collaborated on a group project with agile methodologies and contributed to code reviews, reducing bugs by 10%.
                                </li>
                            </ul>
                        </ExpList>
                    </SubTextWrapper>
                   
                </SubTextBox>
            </Wrapper>
        </Container>
    )
}

export default About

const Container = styled.div`
box-sizing: border-box;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
margin-top: 50px; 
`

const Wrapper = styled.div`
width: 85%;
/* display: flex;
align-items: flex-end; */
/* justify-content: space-between; */
`

const TextBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
border-bottom: 1px solid black;

@media (max-width: 768px) {
    justify-content: center;
}
`

const TextWrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
display: flex;
flex-direction: column;
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
text-align: center;
/* margin-bottom: 20px; */

@media (max-width: 768px) {
    max-width: 360px;
}

h1{
    font-size: 51px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 20px;
}
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 30px;
    /* @media (max-width: 768px) {
        text-align: justify;
    } */
}`

const SubTextBox = styled.div`
width: 100%;
display: flex;
margin-top: 50px;

@media (max-width: 768px) {
    flex-direction: column;
} 
`

const SubTextWrapper = styled.div`
/* border: 1px solid black; */
width: 50%;
display: flex;
flex-direction: column;
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
border-left: 1px solid black;
padding-left: 30px;
/* text-align: center; */
/* max-width: 360px; */

@media (max-width: 768px) {
    width: 100%;
    border: none;
    border-top: 1px solid black;
    padding-left: 0px;
    padding-top: 30px;
} 

h1{
    font-size: 34px;
    font-weight: 700;
    line-height: 35px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        text-align: center;
    }
}
`

const ExpText = styled.div`
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
display: flex;
flex-direction: column;
margin-bottom: 10px;
/* border: 1px solid black; */
/* max-width: 360px; */

@media (max-width: 768px) {
    text-align: center;
    justify-content: center;
}

p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
a{
    color: rgb(204, 204, 204);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    margin-right: 5px;

    &:hover{
        color: black;
    }
    
}`

const ExpList = styled.div`
/* border: 1px solid black; */
ul{
    /* border: 1px solid black; */
    text-align: justify;
}
li{
    color: black;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-right: 5px;
    list-style: circle;
    /* list-style: inside; */
    /* list-style-position: outside; */
    /* border: 1px solid black; */
}`

const TechWrapper = styled.div`
/* border: 1px solid black; */
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-end;
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
text-align: end;
padding-right: 30px;

@media (max-width: 768px) {
    /* max-width: 360px; */
    width: 100%;
    align-items: center;
    text-align: center;
    padding-right: 0px;
    padding-bottom: 30px;
}

h1{
    font-size: 34px;
    font-weight: 700;
    line-height: 35px;
    margin-bottom: 20px;
}
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 10px;

    /* @media (max-width: 768px) {
        text-align: justify;
    } */
}`

const Tech = styled.div``

const Icons = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: flex-end;
gap: 10px;
margin-bottom: 10px;

@media (max-width: 768px) {
    /* max-width: 360px; */
    width: 100%;
    justify-content: center;
}

div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`