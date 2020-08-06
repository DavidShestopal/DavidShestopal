import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardDeck, Jumbotron, Container, CardBody } from 'reactstrap';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 760,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <CardDeck style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '2rem', marginBottom: '4rem' }}>
      <Card style={{ border: 'none' }}>
        <CardBody>
          <div>
            <Jumbotron fluid style={{ background: 'none' }}>
              <Container fluid>
                <h1 className="display-1">Let's Talk</h1>
                <p className="lead">Please feel free to reach out to me and let's make your dreams a reality!</p>
              </Container>
            </Jumbotron>
          </div>
        </CardBody>
      </Card>

      <Card style={{}}>
        <CardBody>
          <List className={classes.root} style={{ marginLeft: '1rem' }}>
            <ListItem>
              <ListItemAvatar>
                <a href="https://www.linkedin.com/in/david-shestopal-4154731a1">
                  <LinkedInIcon style={{ fontSize: '100px', marginRight: '2rem' }} />
                </a>
              </ListItemAvatar>
              <a href="https://www.linkedin.com/in/david-shestopal-4154731a1">
                <p style={{ fontSize: '2rem' }}>LinkedIn</p>
              </a>
            </ListItem>
            <hr />

            <ListItem>
              <ListItemAvatar>
                <a href="mailto:dshestopal@yahoo.com">
                  <MailIcon style={{ fontSize: '100px', paddingRight: '1rem', marginRight: '2rem' }} />
                </a>
              </ListItemAvatar>
              <a href="mailto:dshestopal@yahoo.com">
                <p style={{ fontSize: '2rem' }}>Email</p>
              </a>
            </ListItem>
            <hr />
            <ListItem>
              <ListItemAvatar>
                <a href="https://github.com/DavidShestopal">
                  {' '}
                  <GitHubIcon style={{ fontSize: '100px', paddingRight: '1rem', marginRight: '2rem' }} />
                </a>
              </ListItemAvatar>
              <a href="https://github.com/DavidShestopal">
                {' '}
                <p style={{ fontSize: '2rem' }}>Github</p>
              </a>
            </ListItem>
          </List>
        </CardBody>
      </Card>
    </CardDeck>
  );
}
