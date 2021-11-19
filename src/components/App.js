import { useState } from 'react';
import { Menu, Container} from 'semantic-ui-react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './Aboutme';

function App() {
  const [activeItem,setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div className="app">
      <Container>
        <Menu size='huge' pointing secondary id="menu">
            <Menu.Item id="brand" as={Link} to='/' name="" onClick={handleItemClick} header>Connie Kang</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name='about me'
                as={Link} to='/about'
                active={activeItem === 'about me'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='project'
                active={activeItem === 'project'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='blog'
                active={activeItem === 'blog'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
        </Menu>
      </Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
