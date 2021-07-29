import React from "react";

function Footer() {
    var currentYear = new Date().getFullYear()
  return (
    <div>
      <footer><p>Copyright @ {currentYear}</p></footer>
       </div>
  );
}

export default Footer;
