import React from 'react';

import Card from './Card';

import david from '../assets/images/david.jpg';
import plantwise from '../assets/images/gameoflife.png';
import poki from '../assets/images/poki.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'David Shestopal Github',
          subTitle: 'These are all the projects I have been recently working on!',
          imgSrc: david,
          link: 'https://github.com/DavidShestopal',
          selected: false,
        },
        {
          id: 1,
          title: "Conway's Game of Life ",
          subTitle: 'This game was built using React.js and CSS',

          imgSrc: plantwise,
          link: 'https://conway-game-of-life-git-master.davidshestopal.vercel.app/',

          // links: 'https://github.com/Build-Week-WEB28-Water-My-Plants/Marketing-Page/tree/gh-pages',
          selected: false,
        },
        {
          id: 2,
          title: 'Pokemon Card Fetcher',
          subTitle: 'This is a Pokemon API Card Fetcher built using React.js and CSS',
          imgSrc: poki,
          link: 'https://react-redux-app-2.now.sh',

          // links: 'https://github.com/DavidShestopal/React-Redux-App/tree/master/app',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />;
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">{this.makeItems(this.state.items)}</Row>
      </Container>
    );
  }
}

export default Carousel;
