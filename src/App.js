import './App.css';
import styled from 'styled-components';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//
// THOSE ARE THE TWEETS YOU NEED TO RENDER ON SCREEN, IMAGINE THOSE BEING SENT BACK FROM THE SERVER
//

function App() {
  

  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

// styled components that we use in majority of our projects
// check them out, they're pretty cool
const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  text-align: center
`
