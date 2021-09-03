import reactImage from '../../images/icons/react.svg'
import css from '../../images/icons/css-3.svg'
import github from '../../images/icons/github.svg'
import html from '../../images/icons/html5-2.svg'
import monogo from '../../images/icons/mongo.svg'
import node from '../../images/icons/node.svg'
import redux from '../../images/icons/redux.svg'


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
justify-content: space-evenly;

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


export const Skills = ()=> {

    return (
        <Cont>

           

          <H1>My skills</H1>
            

          <LogoDiv>
            <LogoBox>
                <img src = {reactImage} alt = "logos"/>
                <p>React</p>
            </LogoBox>

            <LogoBox>
                <img src = {redux} alt = "logos"/>
                <p>Redux</p>
            </LogoBox>

            <LogoBox>
                <img src = {css} alt = "logos"/>
                <p>css</p>
            </LogoBox>


            <LogoBox>
                <img src = {html} alt = "logos"/>
                <p>HTML</p>
            </LogoBox>

            <LogoBox>
                <img src = {node} alt = "logos"/>
                <p>NodeJS</p>
            </LogoBox>
            <LogoBox>
                <img src = {monogo} alt = "logos"/>
                <p>MongoDb</p>
            </LogoBox>

            <LogoBox>
                <img src = {github} alt = "logos"/>
                <p>GitHub</p>
            </LogoBox>





          </LogoDiv>
        </Cont>
    )
}