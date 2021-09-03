import booking from '../../images/project/booking.png';
import instahyre from '../../images/project/isntahyre.jpg';
import groww from '../../images/project/groww.jpg';
import styled from 'styled-components';
import css from '../../images/icons/css-3.svg'
import github from '../../images/icons/github.svg'
import html from '../../images/icons/html5-2.svg'
import monogo from '../../images/icons/mongo.svg'
import node from '../../images/icons/node.svg'
import redux from '../../images/icons/redux.svg'
import js from '../../images/icons/js.svg'
import reactImage from '../../images/icons/react.svg'



const Tit = styled.h1`
text-align: center;

`

const Cont = styled.div`
width:100%;
`
const ProjectDiv = styled.div`
width:90%;
margin:0 auto;
padding:1%;
padding-bottom:3%;
margin-bottom:4%;
border-radius:10px;
box-shadow: 0 0 5px #437fc7;

`

const ProjectName = styled.h2`

text-align:center;
font-size:28px;
`

const FlexDiv = styled.div`
display:grid;
grid-template-columns:50% 50%;
justify-content:space-between;


`

const ImageBox = styled.div`
box-shadow: 10px 8px 10px lightgrey;
img{
    display:block;
    width:100%;
    height:100%;
}
`

const InfoDiv = styled.div`
padding:5%;

`
const Text = styled.p`
font-size:20px;
text-align:center;

`

const LogoBox = styled.div`
width: 35px;
box-shadow: 5px 4px 5px lightgrey;
transition: all .2s ease-in-out;
margin-left:20px;
:hover{
    transform: scale(1.1);
    cursor: pointer;
}

img{
    width:100%;
    height: 35px;
    margin: 0 auto;
    display:block;
   
}
 
p{
    margin:0;
    text-align:center;
    font-size:10px;
    font-weight:bold;
}
`
const FlexLogDiv = styled.div`

display:flex;
justify-content:center;
margin-top: 30px;
margin-bottom: 30px;

`

const Btn = styled.div`

background-color:#437fc7;
color:#ffff;
width:20%;

margin: 0 auto;


p{
font-size:20px;
font-weight:500px;
text-align:center;
padding-top:5px;
padding-bottom:5px;
}
:hover{
    cursor:pointer;
    opacity:0.9;
}
`

export const Projects = ()=>{


return (
    <Cont>

        <Tit>Projects</Tit>

        <ProjectDiv>
                <ProjectName>clone of Booking.com</ProjectName>

               
        <FlexDiv> 
            <ImageBox>
                <img src = {booking} alt = "projectImage"/>
                

            </ImageBox>

            <InfoDiv>

                <Text> Booking.com is a Dutch start-up, that provides travel assistance like booking of hotels, resorts, flights, cars, and taxies etc. to the users across the world.</Text>

                <FlexLogDiv>
                <LogoBox>
                <img src = {reactImage} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {js} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {html} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {css} alt = "logos"/>
                
            </LogoBox>

                </FlexLogDiv>

            <Btn onClick = {()=>{

                window.open("https://github.com/Ramlala-Yadav-Git/Booking.com-clone")
            }}>
                <p>View
                    </p>
                </Btn>

            </InfoDiv>

            </FlexDiv>




        </ProjectDiv>

        <ProjectDiv>
                <ProjectName>clone of Insthyre</ProjectName>

               
        <FlexDiv> 
            <ImageBox>
                <img src = {instahyre} alt = "projectImage"/>
                

            </ImageBox>

            <InfoDiv>

                <Text>Instahyre is an advanced hiring platform based on artificial intelligence, enabling recruiters to hire top talent effortlessly.</Text>

                <FlexLogDiv>
                <LogoBox>
                <img src = {reactImage} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {js} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {html} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {css} alt = "logos"/>
                
            </LogoBox>

                </FlexLogDiv>

            <Btn
            onClick = {()=>{

                window.open("https://github.com/Rakesh-pilly/Instahyre")
            }}
            >
                <p>View
                    </p>
                </Btn>

            </InfoDiv>

            </FlexDiv>




        </ProjectDiv>

        <ProjectDiv>
                <ProjectName>clone of Groww</ProjectName>

               
        <FlexDiv> 
            <ImageBox>
                <img src = {groww} alt = "projectImage"/>
                

            </ImageBox>

            <InfoDiv>

                <Text>Groww is an online investment platform that allows investors to invest in mutual funds and stocks.</Text>

                <FlexLogDiv>
               
            <LogoBox>
                <img src = {js} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {html} alt = "logos"/>
                
            </LogoBox>
            <LogoBox>
                <img src = {css} alt = "logos"/>
                
            </LogoBox>

                </FlexLogDiv>

            <Btn
            onClick = {()=>{

                window.open("https://github.com/Rakesh-pilly/project_grow")
            }}
            >
                <p>View
                    </p>
                </Btn>

            </InfoDiv>

            </FlexDiv>




        </ProjectDiv>

    </Cont>
)



}