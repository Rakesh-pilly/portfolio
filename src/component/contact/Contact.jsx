import gitIcons from '../../images/icons/github.png';
import inkedin from "../../images/icons/linkedin.png"
import twitter from "../../images/icons/twitter.svg"
import gmail from "../../images/icons/gmail.svg"

import styled from 'styled-components'

const Cont = styled.div`
width: 100%;



`

const H1 = styled.h1`

text-align:center;


`
const LogoDiv = styled.div`
width:90%;
margin: 60px auto;
display: flex;
align-items:center;
justify-content:center;


`

const LogoBox = styled.div`
width: 120px;
box-shadow: 10px 8px 10px lightgrey;
transition: all .2s ease-in-out;
border-radius:20px;
border:1px solid lightgrey;
:hover{
    transform: scale(1.1);
    cursor: pointer;
}
margin-left:30px;

padding: 10px;
img{
    width:100%;
    height: 100px;
    margin: 0 auto;
    display:block;
    margin-bottom:10px;
}
 
p{
    margin:0;
    text-align:center;
    font-size:26px;
    font-weight:bold;
}

`

const Num = styled.div`
p{
    text-align:center;
    font-size:18px;
}
`


export const Contact = ()=>{


    return (
        <Cont>

           

        <H1>contact me </H1>

        <Num>
<p> Phone : +91 9550-836-882</p>
<p>Email : pillyrakesh@gmail.com</p>

        </Num>
          

        <LogoDiv>
          <LogoBox onClick={()=>{

              window.open("")
          }}
          >
              <img src = {gitIcons} alt = "logos"/>
             
          </LogoBox  >

          <LogoBox onClick={()=>{

window.open("https://github.com/Rakesh-pilly")
}} >
              <img src = {inkedin} alt = "logos"/>
           
          </LogoBox>

          <LogoBox onClick={()=>{

window.open("https://www.linkedin.com/in/rakesh-pilly/")
}} >
              <img src = {twitter} alt = "logos"/>
              
          </LogoBox>

          <LogoBox onClick={()=>{

window.open("https://twitter.com/RakeshM11139132")
}} >
              <img src = {gmail} alt = "logos"/>
              
          </LogoBox>






        </LogoDiv>
      </Cont>
    )
}