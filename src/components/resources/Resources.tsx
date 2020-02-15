import React, { useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { theme } from '../../theme/theme';
import NihAcknowledgement from './resources/NihAcknowledgement';
import { navigate, Router } from '@reach/router';
import Disclaimer from './resources/Disclaimer';
import UsefulLinks from './resources/UsefulLinks';
import Articles from './resources/Articles';
// import Core from './resources/Core';
import SideMenu from '../ui/SideMenu';
import MolecularCore from './resources/MolecularCore';
import PulmonaryCore from './resources/PulmonaryCore';
import SmartMenu from '../ui/SmartMenu';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
});

const Resources = props => {
  const [active, setActive] = useState('');
  const classes = useStyles({});
  const links = [
    {
      clickHandler: () => {
        setActive('nih');
        navigate('/resources/nih');
      },
      name: 'nih',
      displayName: 'NIH Acknowledgement',
    },
    {
      clickHandler: () => {
        setActive('disclaimer');
        navigate('/resources/disclaimer');
      },
      name: 'disclaimer',
      displayName: 'Disclaimer',
    },
    {
      clickHandler: () => {
        setActive('useful-links');
        navigate('/resources/useful-links');
      },
      name: 'useful-links',
      displayName: 'Useful Links',
    },
    {
      clickHandler: () => {
        setActive('articles');
        navigate('/resources/articles');
      },
      name: 'articles',
      displayName: 'Articles',
    },
    {
      clickHandler: () => {
        setActive('pulmonary-core');
        navigate('/resources/pulmonary-core');
      },
      name: 'pulmonary-core',
      displayName: 'Pulmonary Immunopathology Core',
    },
    {
      clickHandler: () => {
        setActive('molecular-core');
        navigate('/resources/molecular-core');
      },
      name: 'molecular-core',
      displayName: 'Molecular Biology Core ',
    },
  ];

  return (
    <Container className={classes.cont}>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={4}>
          <SmartMenu
            active={active}
            links={links}
            setActive={setActive}
            title="resources"
          />
          {/* <SideMenu active={active} links={links} /> */}
        </Grid>
        <Grid container item xs={12} sm={8}>
          <Router>
            <NihAcknowledgement path="nih" />
            <Disclaimer path="disclaimer" />
            <UsefulLinks path="useful-links" />
            <Articles path="articles" />
            <PulmonaryCore path="pulmonary-core" />
            <MolecularCore path="molecular-core" />
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
