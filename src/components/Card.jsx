import { GoArrowUpRight } from "react-icons/go"
import styled from "styled-components"

const Card = (props) => {
    return (
        <Container>
            <Wrapper>
                <ImageBox>
                    <ImageWrapper>
                        <img src= {props.image} alt= "project-image" />
                    </ImageWrapper>
                </ImageBox>
                <TextBox>
                    <TextWrapper>
                        <h1>{props.title}</h1>
                        <p>{props.detail}</p>
                    </TextWrapper>
                    <Buttons>
                        <Btn>
                            <a href= {props.live} target="_blank">Live View<GoArrowUpRight /></a>
                        </Btn>
                        <Btn>
                            <a href= {props.github} target="_blank" >View on Github<GoArrowUpRight /></a>
                        </Btn>
                    </Buttons>
                </TextBox>
            </Wrapper>
        </Container>
    )
}

export default Card

const Container = styled.div`
box-sizing: border-box;
width: calc(50% - 50px);
display: flex;
align-items: center;
justify-content: center;
/* height: 300px; */
border-top: 1px solid black;
padding-top: 20px;
margin-top: 50px;

/* background-color: rgb(230, 230, 230); */
/* border: 1px solid black; */

@media (max-width: 1240px) {
    align-items: flex-start;
    width: calc(50% - 15px);

}

@media (max-width: 768px) {
    align-items: flex-start;
    width: calc(50% - 20px);

}


`

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: flex-end;
gap: 10px;
/* height: 150px; */
/* border: 1px solid black; */
@media (max-width: 768px) {
    flex-direction: column;
    align-items: normal;
}
` 

const ImageBox = styled.div`
width: 40%;
height: 150px;
/* border: 1px solid black; */
/* height: 100%; */
margin-right: 10px;

@media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 10px;
}
`

const ImageWrapper = styled.div`
width: 100%;
height: 100%;
/* border: 1px solid black; */
img{
    height: 100%;
    width: 100%;
    border-radius: 8px;
    /* object-fit: fill; */
}`

const TextBox = styled.div`
width: 60%;
max-width: 290px;

@media (max-width: 768px) {
    width: 100%;
}
`

const TextWrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
display: flex;
flex-direction: column;
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
/* text-align: center; */
/* margin-bottom: 20px; */

/* @media (max-width: 768px) {
    max-width: 360px;
} */

h1{
    font-size: 25px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
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

const Buttons = styled.div`
display: flex;
gap: 10px;`

const Btn = styled.div`
cursor: pointer;
a{
    /* border: 1px solid black; */
    color: rgb(204, 204, 204);
    font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2px;
    border-bottom: 1px solid rgb(204, 204, 204);

    &:hover{
        color: black;
        border-bottom: 1px solid black;
    }
}
`