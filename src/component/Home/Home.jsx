import styled from 'styled-components';
import dp from "../../images/profilePic.png";
import doc from '../../images/icons/document.svg'
import gitIcons from '../../images/icons/github.png';
import inkedin from "../../images/icons/linkedin.png"
import twitter from "../../images/icons/twitter.svg"

const Container = styled.div`
display:flex;
background-color:#edf6ff;

`
const Info = styled.div`
width:40%;
padding:5%;

`
const  Profile = styled.div`
width:40%;
padding:5%;
display:flex;
img{
    width:70%;
    border-radius:4%;
   
}

`
const Hi = styled.p`
margin: 0;
font-size:2rem;
`

const Span = styled.span`
margin: 0;
font-size:2.5rem;

`
const H1 = styled.h1`
margin: 0;
font-size:4rem;

`
const H2 = styled.h2`
margin: 0;
font-size:2.5rem;



`
const Resume = styled.div`

width:30%;
height:15%;
border-radius:4%;
margin-left:10%;
margin-top:10%;
display:block;
background-color:#437fc7;
display:flex;
align-items:center;
justify-content: space-evenly;
color:#ffff;
p{
    font-size:1.2rem;
}
&:hover{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
`

const Logo = styled.div`
margin:auto;
width:80px;
height:150px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

img:hover{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
`


export const Home = ()=>{


    return(
        <Container>

            <Info>
                <div>
                    <Hi>Hi,</Hi>
                    <div>
                        <Span>I am </Span> <H1>Rakesh Pilly</H1>
                    </div>

                    <H2>Full Stack Web Developer</H2>
                    


                </div>
                    <Resume>

                        <img src = {doc} alt = ""/>

                        <p>Resume
                            </p>
                        </Resume>

            </Info>

            <Profile>
                <div>

        <img src = {dp} alt = "dp"/>

                </div>

                <Logo>
                    
                    <img src = {gitIcons} alt = "github" onClick={()=> {
                        window.open("https://github.com/Rakesh-pilly").focus()
                    }}/>
                    <img src = {inkedin} alt = "github"
                     onClick={()=> {
                        window.open("https://www.linkedin.com/in/rakesh-pilly/").focus() }}
                    />
                    <img src = {twitter} alt = "github"  onClick={()=> {
                        window.open("https://twitter.com/RakeshM11139132").focus() }}/>

                                   


                </Logo>


            </Profile>


        </Container>
    )
}