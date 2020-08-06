import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { DiReact } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiLess } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiPostgresql } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { DiBootstrap } from 'react-icons/di';

const About = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ background: 'none', marginLeft: '4rem' }}>
        <Container fluid>
          <h1 className="display-3">About Me</h1>
          <div>
            <p className="lead">
              {' '}
              Hi, my name is David Shestopal and I am a full-stack software engineer.
              <p className="lead" style={{ marginTop: '1rem' }}>
                {' '}
                Software engineering has given me the opportunity to create usable products and express my creativity
                through my work.{' '}
              </p>
              <p className="lead">
                {' '}
                I am constantly learning and evolving and always seeking to better myself in any way.{' '}
              </p>
              <p className="lead"> My Skills include but not limited to...</p>
            </p>
            <DiReact style={{ fontSize: '5rem' }} />
            <AiFillHtml5 style={{ fontSize: '5rem' }} />
            <DiCss3 style={{ fontSize: '5rem' }} />
            <DiLess style={{ fontSize: '5rem' }} />
            <DiSass style={{ fontSize: '5rem' }} />
            <DiNodejsSmall style={{ fontSize: '5rem' }} />
            <DiPostgresql style={{ fontSize: '5rem' }} />
            <DiPython style={{ fontSize: '5rem' }} />
            <DiGithubBadge style={{ fontSize: '5rem' }} />
            <DiMysql style={{ fontSize: '5rem' }} />
            <DiBootstrap style={{ fontSize: '5rem' }} />
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
