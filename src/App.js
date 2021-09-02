import styled from 'styled-components'
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import {Switch ,Route} from "react-router-dom"
import { Home } from './component/Home/Home';


const Container = styled.div`
width: 200px;
height:20px;
background-color:black;
`

function App() {
  return (
    <div>
      <Navbar/>

      <Switch>


                <Route exact path = '/' activeStyle>
                <Home/>

                </Route>

                <Route exact path = '/About' activeStyle>
                    

                </Route>
            </Switch>

    
     
    
    </div>
  );
}

export default App;
