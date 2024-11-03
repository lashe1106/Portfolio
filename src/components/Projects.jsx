import styled from "styled-components"
import Card from "./Card"
import Snap from "../assets/jpg/snap.jpg"
import Funiro from "../assets/jpg/funiro.jpg"
import Nexcent from "../assets/jpeg/nexcent.jpeg"
import Countries from "../assets/png/countries.png"
import Product from "../assets/jpeg/product.jpeg"
import Kuda from "../assets/jpg/kuda.jpg"

const Projects = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>Projects</h1>
                        <p>Explore some of my projects built seamlessly while utilizing front-end technologies.</p>
                    </TextWrapper>
                </TextBox>
                <CardBox>
                    <Card image={Snap} title="Snap" detail="User-friendly and responsive website built using HTML and CSS and made interactive with JavaScript." github="https://github.com/lashe1106/Snap" />
                    <Card image={Funiro} title="Funiro" detail="E-commerce website with immersive layout built using HTML and CSS while utilizing figma to implement styles." github="https://github.com/lashe1106/Funiro" />
                    <Card image={Nexcent} title='Nexcent' detail="Structured website with immersive layout built using HTML and CSS while utilizing figma to implement styles" github="https://github.com/lashe1106/Nexcent" />
                    <Card image={Kuda} title="Kuda-Clone" detail="Kuda landing page replica built with react.js tocreate dynamic user interfaces." live="https://kuda-react-hclrg5dvg-owonubi-toluwalases-projects.vercel.app/" github="https://github.com/lashe1106/Kuda-React/tree/main" />
                    <Card image={Countries} title="Rest-Countries-API" detail="Website developed to searc and filter through countries with data fetched from API and built while utilizing JavaScript." github="https://github.com/lashe1106/Rest-Countries-with-API" />
                    <Card image={Product} title="Product-List-Cart" detail="Interactive web layout with products and a cart that gets the total price built while implementing JavaScript." github="https://github.com/lashe1106/Product-list-with-cart" />
                </CardBox>
            </Wrapper>
        </Container>
    )
}

export default Projects

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
display: flex;
flex-direction: column;

/* justify-content: center; */
`

const TextBox = styled.div`
width: 100%;
/* border: 1px solid black; */

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}`

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
    /* margin-bottom: 30px; */
}`

const CardBox = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;`