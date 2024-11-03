import styled from "styled-components"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Hero from "../components/Hero"

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <HeroWrapper id="home">
                   <Hero /> 
                </HeroWrapper>
                <SubWrapper id="about">
                   <About /> 
                </SubWrapper>
                <SubWrapper id="projects">
                    <Projects />
                </SubWrapper>
                <SubWrapper id="contact">
                    <Contact />
                </SubWrapper>
            </Wrapper>
        </Container>
    )
}

export default Home

const Container = styled.div`
/* border: 1px solid black; */
box-sizing: border-box;
/* padding: 50px 0px; */
margin: 60px 0px;`

const Wrapper = styled.div``

const  HeroWrapper = styled.div`
    /* &:target {
        padding-top: 50px;
    } */
`

const SubWrapper = styled.div`
padding-top: 60px;
`