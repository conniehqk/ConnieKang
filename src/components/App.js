import { useState } from 'react';
import { Menu, Container, Sidebar } from 'semantic-ui-react'
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
            <Menu.Menu  position='right'>
              <Sidebar only='mobile' toggleBtn={true} />
              <Menu.Item
                only='computer'
                name='about me'
                as={Link} to='/about'
                active={activeItem === 'about me'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='project'
                only='computer'
                active={activeItem === 'project'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='blog'
                only='computer'
                active={activeItem === 'blog'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='contact'
                only='computer'
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
