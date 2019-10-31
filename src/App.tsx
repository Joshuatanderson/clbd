import React, { Fragment } from 'react';
import { Typography, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'
import { Router } from '@reach/router'

import { theme } from './theme/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'
import About from './components/about/About';
import People from './components/people/People';
import Seminars from './components/seminars/Seminars';
import Seminar from './components/seminars/Seminar';

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Hero path="/" />
          <About path="/about" />
          <People path="/people" />
          <Seminars path="/events" /> 
          <Seminar path="/event/:seminarIndex" />
        </Router>
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
