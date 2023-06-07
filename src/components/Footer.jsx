import React from 'react'
function Footer() {
  let year = new Date();
    return (
      <footer>
        <p>This is a footer element { year.getFullYear() }</p>
      </footer>
    );
  }
  export default Footer;