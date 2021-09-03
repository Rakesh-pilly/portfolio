import styled from 'styled-components'
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import {Switch ,Route} from "react-router-dom"
import { Home } from './component/Home/Home';
import { Skills } from './component/skills/Skills';
import { Projects } from './component/projects/Projects';
import { Contact } from './component/contact/Contact';



const Container = styled.div`
*{
  font-family: 'Roboto Condensed', sans-serif;
}

`

function App() {
  return (
    <Container>
      <Navbar/>

      <Switch>


                <Route exact path = '/' activeStyle>
                <Home/>

                </Route>

                <Route exact path = '/About' activeStyle>
                    

                </Route>
                <Route exact path = '/Skills' activeStyle>
                    <Skills/>  

                </Route>

                <Route exact path = '/Projects' activeStyle>
                  
                    <Projects/>
                </Route>

                <Route exact path = '/Contact' activeStyle>
                  
                <Contact/>

                
              </Route>
            </Switch>

    
     
    
    </Container>
  );
}

export default App;
