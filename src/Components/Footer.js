import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class=" py-2  text-center text-light position-relative shadow"
        style={{ background: "#272522" }}
      >
        <div class="container">
          <p class="lead">
            Copyright &copy;
            {new Date().getFullYear()} : Chess Data WearHouse
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
