import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class=" p-5 bg-dark text-center text-light position-relative">
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
