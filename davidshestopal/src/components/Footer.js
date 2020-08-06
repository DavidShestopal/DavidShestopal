import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="mt-5">
      <center>
        {' '}
        <p>
          Copyright &copy; <script>document.write(new Date().getFullYear())</script> David Shestopal All Rights Reserved
        </p>
      </center>
    </footer>
  );
}

export default Footer;
