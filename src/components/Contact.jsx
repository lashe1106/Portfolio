import { AiOutlineGithub } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"
import { IoLocation } from "react-icons/io5"
import { MdEmail, MdPhone } from "react-icons/md"
import styled from "styled-components"

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextWrapper>
                        <h1>Contact</h1>
                        <p>Contact me through any of these medias or fill a form.</p>
                    </TextWrapper>
                </TextBox>
                <SubTextWrapper>
                    <SubTextBox>
                        <SubText>
                            <h1>Contact Info</h1>
                        </SubText>
                        <ContactWrapper>
                            <div>
                                <MdPhone />
                                (+234)8112072567
                            </div>
                            <div>
                                <MdEmail />
                                <a href="mailto:toluwalaseowonubi@gmail.com?subject=Contact%20Form&body=Hello,%20I%20would%20like%20to%20get%20in%20touch.">toluwalaseowonubi@gmail.com</a>
                                
                            </div>
                            <div>
                                <IoLocation />
                                Ikorodu, Lagos, Nigeria.
                            </div>
                        </ContactWrapper>
                        <Media>
                            <a href="https://github.com/lashe1106"><AiOutlineGithub size={25} /></a>
                            <a href="https://x.com/suzie_lashe"><IoLogoLinkedin size={25} /></a>
                            <a href="https://x.com/suzie_lashe"><FaXTwitter size={25} /></a>
                        </Media>
                    </SubTextBox>
                    <FormBox>
                        <FormText>
                            <h1>Let's Connect</h1>
                            <p>Hey! let's connect. Fill out the form below.</p>
                        </FormText>
                        
                        <form action="">
                            <main>
                                <div>
                                    <label  htmlFor="name">Name:</label>
                                    <label htmlFor="email">Email:</label>
                                    <label htmlFor="subject">Subject:</label>
                                    <label htmlFor="message">Message:</label>
                                </div>
                                <div>
                                    <input type="text" id="name" name="name" />
                                    <input type="email" id="email" name="email" />
                                    <input type="text" id="subject" name="subject" />
                                    <textarea id="message" name="message"  />
                                </div>
                            </main>
                            
                            <div>
                                <button>Submit</button>
                            </div>
                            
                        </form>
                    </FormBox>
                </SubTextWrapper>
                    
            </Wrapper>
        </Container>
    )
}

export default Contact

const Container = styled.div`
box-sizing: border-box;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
margin-top: 50px;`

const Wrapper = styled.div`
width: 85%;`

const TextBox = styled.div`
width: 100%;

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* border: 1px solid black; */
width: 100%;
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

const SubTextWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
/* border: 1px solid black; */

@media (max-width: 768px) {
    flex-direction: column;
}
`

const SubTextBox = styled.div`
width: 22%;
/* border: 1px solid black; */
@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}`

const SubText = styled.div`
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
display: flex;
flex-direction: column;
/* align-items: center; */
margin-bottom: 15px;
/* border: 1px solid black; */
h1{
    font-size: 34px;
    font-weight: 700;
    line-height: 35px;
    /* margin-bottom: 15px; */
}
`

const ContactWrapper = styled.div`
/* width: 100%; */
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 15px;
/* border: 1px solid black; */
/* max-width: 360px; */

@media (max-width: 768px) {
    justify-content: center;
}

div{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 5px;
    /* border: 1px solid black; */
}
a{
    color: rgb(204, 204, 204);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    /* margin-right: 5px; */

    &:hover{
        color: black;
    }
    
}`

const Media = styled.div`
/* border: 1px solid black; */

a{
    color: black;
    text-decoration: none;
    margin-right: 5px;
}`

const FormBox = styled.div`
width: 78%;
border-left: 1px solid black;
padding-left: 30px;
margin-left: 30px;
/* border: 1px solid black; */

@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-left: none;
    padding-left: 0px;
    margin-left: 0px;
    padding-top: 30px;
    margin-top: 30px;
}

form{
    font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
    }
    main{
        display: flex;
        gap: 20px;
        /* border: 1px solid black; */
    }
    div{
        /* width: 33.3%; */
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        input{
            width: 191px;
            padding: 10px;
            margin-top: 10px;
            outline: none;
            border: none;
            background-color: rgba(0, 0, 0, 0.1); 
            border-radius: 4px;
            color: #000;
        }
        textarea{
            padding: 10px;
            margin-top: 10px;
            outline: none;
            border: none;
            background-color: rgba(0, 0, 0, 0.1); 
            border-radius: 4px;
            color: #000;
        }
        label{
            display: flex;
            align-items: flex-end;
            margin-top: 22.5px;
            /* border: 1px solid black; */
        }

    }
    button{
        width: 100px;
        padding: 10px;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 8px;
    
    }
}
`

const FormText = styled.div`
font-family:  system-ui, "Noto Sans", "Roboto", sans-serif;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
}

p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 10px;
}
h1{
    font-size: 34px;
    font-weight: 700;
    line-height: 35px;
    margin-bottom: 15px;
    /* border: 1px solid black; */
}

`