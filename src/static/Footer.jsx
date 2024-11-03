import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <hr />
                <p>©2024 Owonubi Toluwalase</p>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
box-sizing: border-box;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;`

const Wrapper = styled.div`
width: 85%;
hr{
    margin-bottom: 20px;
}
p{
    color: rgb(154, 154, 154);
    font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
}`