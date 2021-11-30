import { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './Aboutme';
import Contact from './Contact';
import Project from './Project';

function App() {
  const [activeItem,setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div className="app">
      <Container>
        <Menu size='huge' pointing stackable secondary id="menu">
            <Menu.Item className="animate__animated animate__tada" id="brand" as={Link} to='/' name="" onClick={handleItemClick} header>Connie Kang</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name='about me'
                as={Link} to='/about'
                active={activeItem === 'about me'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='project'
                as={Link} to='/project'
                active={activeItem === 'project'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='resume'
                active={activeItem === 'resume'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='contact'
                as={Link} to='/contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
        </Menu>
      </Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
