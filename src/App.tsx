import React from 'react';
import { Link, Element, scroller } from 'react-scroll';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      {/* ナビゲーションバー */}
      <AppBar position="sticky">
        <Toolbar>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="profile" spy={true} smooth={true} offset={-70} duration={500}>
            <Button color="inherit">Profile</Button>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* コンテンツセクション */}
      <Container>
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="profile">
          <Profile />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Container>
    </div>
  );
};

export default App;