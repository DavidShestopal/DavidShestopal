import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Jumbotronone extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ background: 'transparent' }}>
          <Container>
            <h1 style={{ fontSize: '5.2rem' }}>Chase Adventure</h1>
            <p style={{ fontSize: '2.5rem', color: 'grey' }}>Projects that make an impact</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbotronone;
