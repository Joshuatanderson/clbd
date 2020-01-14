import React from 'react';
import {
  Typography,
  Grid,
  Container,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { theme } from '../../theme/theme';
import NihAcknowledgement from './resources/NihAcknowledgement';
import { navigate, Router } from '@reach/router';
import Disclaimer from './resources/Disclaimer';
import UsefulLinks from './resources/UsefulLinks';
import Articles from './resources/Articles';
import Core from './resources/Core';
import SideMenu from '../ui/SideMenu';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
});

const Resources = ({ path, children }) => {
  const classes = useStyles({});
  const links = [
    { clickHandler: () => navigate('/resources/nih'), name: 'NIH Acknowledgement' },
    { clickHandler: () => navigate('/resources/disclaimer'), name: 'Disclaimer' },
    { clickHandler: () => navigate('/resources/useful-links'), name: 'Useful Links' },
    { clickHandler: () => navigate('/resources/articles'), name: 'Articles' },
    {
      clickHandler: () => navigate('/resources/core/pulmonary immunopathology core'),
      name: 'Pulmonary Immunopathology Core',
    },
    {
      clickHandler: () => navigate('/resources/core/molecular biology core'),
      name: 'Molecular Biology Core ',
    },
  ];

  return (
    <Container className={classes.cont}>
      <Grid spacing={3} container>
        <Grid item xs={12}>
          <Typography variant="h4">CLBD resources</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SideMenu links={links} />
        </Grid>
        <Grid container item xs={12} sm={8}>
          <Router>
            <NihAcknowledgement path="nih" />
            <Disclaimer path="disclaimer" />
            <UsefulLinks path="useful-links" />
            <Articles path="articles" />
            <Core
              path="core/:name"
              links={[
                {
                  title: 'Amazon',
                  link: 'https://www.amazon.com',
                },
              ]}
            />
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
