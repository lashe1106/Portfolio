import styled from "styled-components"
import Profile from "../assets/jpg/profile.jpg"
import {GoArrowUpRight} from "react-icons/go"

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>Hi, I am Owonubi Toluwalase</h1>
                        <p>Frond-End Developer Experienced in HTML, CSS, JavaScript and Using Frameworks such as React.js to Produce User-friendly and Responsive Websites.</p>
                    </TextWrapper>
                    <Buttons>
                        <Btn>
                            <h1>Contact Me</h1>
                            <GoArrowUpRight />
                        </Btn>
                        <Btn>
                            <h1>View my CV</h1>
                            <GoArrowUpRight />
                        </Btn>
                    </Buttons>
                </TextBox>
                <ImageBox>
                    <ImageWrapper>
                       <img src= {Profile} alt="" /> 
                    </ImageWrapper>
                </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default Hero

const Container = styled.div`
box-sizing: border-box;
width: 100%;
min-height: calc(100vh - 60px);
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
/* margin-bottom: 8%; */
`

const Wrapper = styled.div`
width: 85%;
display: flex;
align-items: flex-end;
justify-content: space-between;

@media (max-width: 768px) {
   flex-wrap: wrap; 
}
`

const TextBox = styled.div`
/* border: 1px solid black; */
width: 35%;

@media (max-width: 768px) {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center; 
   margin-bottom: 60px; 
}`

const TextWrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
display: flex;
flex-direction: column;
max-width: 360px;
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
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
    margin-bottom: 20px;
}
/* @media (max-width: 768px) {
   justify-content: center; 
} */
`

const Buttons = styled.div`
/* border: 1px solid black; */
display: flex;
gap: 20px;

@media (max-width: 768px) {
    /* justify-content: center; */
}`

const Btn = styled.div`
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
box-sizing: border-box;
border: 1px solid black;
padding: 8px;
border-radius: 8px;
display: flex;
align-items: center;
h1{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-right: 5px;
}`

const ImageBox = styled.div`
width: 65%;
/* border: 1px solid black; */
display: flex;
justify-content: center;

@media (max-width: 768px) {
   width: 100%;
}
`
const ImageWrapper = styled.div`
/* border: 1px solid black; */
box-sizing: border-box;
width: 100%;
max-width: 350px;
@media (max-width: 768px) {
    display: flex;
    align-items: center;
}


img{
    width: 100%;
    /* width: 340px; */
    border-radius: 50%;
}    
`