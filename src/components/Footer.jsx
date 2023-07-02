import React from 'react'
function Footer() {
  let year = new Date();
    return (
      <footer>
        <p>Mukund Solanki || { year.getFullYear() }</p>
      </footer>
    );
  }
  export default Footer;