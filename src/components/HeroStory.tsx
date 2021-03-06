import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Link,
  Container,
} from '@material-ui/core';

import heroImg from '../assets/misc/home.jpg';
import { theme } from '../theme/theme';

const useStyles = makeStyles({
  imgCont: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    height: '25vh',
  },
  img: {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
  outerCont: {
    marginTop: theme.spacing(3),
    width: '100%',
    marginLeft: 10,
  },
});

const HeroStory = props => {
  const classes = useStyles();
  return (
    <Grid xs={12} container item spacing={3} alignItems="center">
      <Grid item xs={12} sm={6} className={classes.imgCont}>
        <div className={classes.img} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">
          Economic Development Win: LSU Garners $11.5M Grant from NIH to
          Establish Louisiana Pulmonary Research Center
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Baton Rouge- The LSU School of Veterinary Medicine, or LSU SVM, has
          been awarded more than $11.5 million in funding over five years from
          the National Institutes of Health, or NIH, to launch the Center for
          Lung Biology and Disease, or CLBD. Samithamby Jeyaseelan, the William
          L. Jenkins Professor in the Department of Pathobiological Sciences,
          will serve as principal investigator, and Rhonda Cardin, associate
          dean for research and advanced studies, will serve as co-investigator.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link
          variant="body1"
          href="https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php"
        >
          ...view more
        </Link>
      </Grid>
    </Grid>
  );
};

export default HeroStory;
