import React, { useState, Fragment, useEffect, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Person from './Person';
import { createLinks } from '../people/PeopleLinks';
import SmartMenu from '../ui/SmartMenu';
import HistoryContext from '../contexts/HistoryContext';

interface peopleProps {
  path: string;
  data: any;
  location?: any;
}

const People = ({ path, data, location }: peopleProps) => {
  const history: any = useContext(HistoryContext);
  const [active, setActive] = useState(
    (location && location.state.code) || 'leadership',
  );
  const links = createLinks(history);

  useEffect(() => {
    setActive((location && location.state.code) || 'leadership');
  }, [location]);
  console.log(location.state);

  const createPeople = peopleData => {
    if (data) {
      return peopleData[active].members.map(person => (
        <Person
          isActive={person.isActive}
          key={person.name}
          name={person.name}
          title={person.title}
          mentors={person.mentors}
          role={person.role}
          degree={person.degree}
          link={person.link}
          img={person.image}
          abstract={person.abstract}
          institution={person.institution}
        />
      ));
    }
  };

  return (
    <Fragment>
      <Grid container justify="center" item xs={12}>
        {/* <Grid item xs={12}>
          <Typography variant="h5" align="center">
            {(location && location.state.displayName) || 'Leadership'}
          </Typography>
        </Grid> */}
        <SmartMenu
          active={active}
          setActive={setActive}
          links={links}
          title="group"
        />
        {data && createPeople(data)}
      </Grid>
    </Fragment>
  );
};

export default People;
