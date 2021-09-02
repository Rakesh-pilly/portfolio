import {Link} from "react-router-dom";
import styled from 'styled-components';

const navList = [
    {title: "Home" ,path: "/"},
    {title: "About" ,path: "/About"},
    {title: "Skills" ,path:"Skills"},
    {title: "Projects" ,path: "/Projects"},
    {title: "Contact" ,path: "/Contact"},

]

const Container = styled.div`
width:100%;
height:80px;
background-color:#437fc7;
display:flex;
align-items:center;
justify-content:space-between;
color:#ffff;
`

const Name = styled.div`
padding-left:3%;
display:inline-block;
h1{
    font-size:2rem;
}
`

const Options = styled.div`
width:50%;
display:flex;
justify-content: space-evenly;
`

const Dummy = styled.div`
padding-right:6%;
width: 10%;
height: 10px;`

const Links = styled(Link)`
text-decoration: none;
color:#ffff;



`



export const Navbar = ()=>{

    return (
        <Container>

            <Name>
                <h1>Rakesh Pilly</h1>
            </Name>

            <Options>

            {navList.map((iteam, i)=>{
                return (
                    <div key = {i}> 
                <Links to = {iteam.path}>{iteam.title}</Links>

                </div>
                )
            }
            
             
             
             )}



            </Options>

            <Dummy>

            </Dummy>

           


            
        </Container>
    )
}